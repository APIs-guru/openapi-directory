from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import routingstrategytype_enum


@dataclass_json
@dataclass
class RoutingStrategy:
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    type: Optional[routingstrategytype_enum.RoutingStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
