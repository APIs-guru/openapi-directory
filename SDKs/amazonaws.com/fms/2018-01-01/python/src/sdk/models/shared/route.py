from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import destinationtype_enum
from . import targettype_enum


@dataclass_json
@dataclass
class Route:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    destination_type: Optional[destinationtype_enum.DestinationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationType' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    target_type: Optional[targettype_enum.TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
