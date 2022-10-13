from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InferenceAccelerator:
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    device_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    
