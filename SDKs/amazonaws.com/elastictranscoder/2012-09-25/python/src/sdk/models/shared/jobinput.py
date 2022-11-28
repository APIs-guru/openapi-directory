from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobInput:
    r"""JobInput
    Information about the file that you're transcoding.
    """
    
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    detected_properties: Optional[DetectedProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedProperties') }})
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    input_captions: Optional[InputCaptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputCaptions') }})
    interlaced: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interlaced') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    time_span: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSpan') }})
    
