from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFleetCapacityInput:
    desired_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredInstances' }})
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSize' }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinSize' }})
    
