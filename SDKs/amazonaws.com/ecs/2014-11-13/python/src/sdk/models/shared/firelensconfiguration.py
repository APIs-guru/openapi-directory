from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import firelensconfigurationtype_enum


@dataclass_json
@dataclass
class FirelensConfiguration:
    options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    type: firelensconfigurationtype_enum.FirelensConfigurationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
