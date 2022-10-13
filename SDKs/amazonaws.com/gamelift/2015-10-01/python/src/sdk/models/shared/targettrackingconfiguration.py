from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetTrackingConfiguration:
    target_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetValue' }})
    
