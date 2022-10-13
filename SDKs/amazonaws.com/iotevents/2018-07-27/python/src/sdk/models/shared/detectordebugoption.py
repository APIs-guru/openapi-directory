from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetectorDebugOption:
    detector_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelName' }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    
