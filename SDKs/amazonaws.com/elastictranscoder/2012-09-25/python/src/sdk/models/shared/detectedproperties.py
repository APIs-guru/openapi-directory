from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetectedProperties:
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationMillis' }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSize' }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
