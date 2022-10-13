from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountQuota:
    account_quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountQuotaName' }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Max' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Used' }})
    
