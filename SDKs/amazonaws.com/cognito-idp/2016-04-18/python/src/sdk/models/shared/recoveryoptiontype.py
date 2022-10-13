from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import recoveryoptionnametype_enum


@dataclass_json
@dataclass
class RecoveryOptionType:
    name: recoveryoptionnametype_enum.RecoveryOptionNameTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    
