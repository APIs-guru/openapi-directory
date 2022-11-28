from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectedProperties:
    r"""DetectedProperties
    The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
    """
    
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSize') }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    
