from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keyusagename_enum


@dataclass_json
@dataclass
class KeyUsage:
    name: Optional[keyusagename_enum.KeyUsageNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
