from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recoveryoptiontype


@dataclass_json
@dataclass
class AccountRecoverySettingType:
    recovery_mechanisms: Optional[List[recoveryoptiontype.RecoveryOptionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecoveryMechanisms' }})
    
