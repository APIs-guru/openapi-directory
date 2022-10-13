from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import retentionintervalunitvalues_enum


@dataclass_json
@dataclass
class ShareRule:
    target_accounts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAccounts' }})
    unshare_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnshareInterval' }})
    unshare_interval_unit: Optional[retentionintervalunitvalues_enum.RetentionIntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnshareIntervalUnit' }})
    
