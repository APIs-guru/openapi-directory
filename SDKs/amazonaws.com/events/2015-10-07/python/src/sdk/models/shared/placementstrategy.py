from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import placementstrategytype_enum


@dataclass_json
@dataclass
class PlacementStrategy:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    type: Optional[placementstrategytype_enum.PlacementStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
