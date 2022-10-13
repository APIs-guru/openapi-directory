from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectorstatedefinition


@dataclass_json
@dataclass
class UpdateDetectorRequest:
    detector_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectorModelName' }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    message_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageId' }})
    state: detectorstatedefinition.DetectorStateDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
