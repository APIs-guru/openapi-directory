from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detectedproperties
from . import encryption
from . import inputcaptions
from . import timespan


@dataclass_json
@dataclass
class JobInput:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    detected_properties: Optional[detectedproperties.DetectedProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectedProperties' }})
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    input_captions: Optional[inputcaptions.InputCaptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputCaptions' }})
    interlaced: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interlaced' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resolution' }})
    time_span: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSpan' }})
    
