from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoParameters:
    r"""VideoParameters
    The <code>VideoParameters</code> structure.
    """
    
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitRate') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    codec_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecOptions') }})
    display_aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayAspectRatio') }})
    fixed_gop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedGOP') }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    keyframes_max_dist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyframesMaxDist') }})
    max_frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFrameRate') }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHeight') }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWidth') }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingPolicy') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizingPolicy') }})
    watermarks: Optional[List[PresetWatermark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    
