from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tainteffect_enum


@dataclass_json
@dataclass
class Taint:
    effect: Optional[tainteffect_enum.TaintEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effect' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
