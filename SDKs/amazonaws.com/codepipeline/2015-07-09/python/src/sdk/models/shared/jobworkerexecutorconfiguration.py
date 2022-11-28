from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JobWorkerExecutorConfiguration:
    r"""JobWorkerExecutorConfiguration
    Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
    """
    
    polling_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingAccounts') }})
    polling_service_principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingServicePrincipals') }})
    
