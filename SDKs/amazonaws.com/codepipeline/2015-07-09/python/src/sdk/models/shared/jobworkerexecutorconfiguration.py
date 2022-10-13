from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobWorkerExecutorConfiguration:
    polling_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingAccounts' }})
    polling_service_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingServicePrincipals' }})
    
