from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import advancedsecuritymodetype_enum


@dataclass_json
@dataclass
class UserPoolAddOnsType:
    advanced_security_mode: advancedsecuritymodetype_enum.AdvancedSecurityModeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdvancedSecurityMode' }})
    
