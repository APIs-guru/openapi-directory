from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioParameters:
    r"""AudioParameters
    Parameters required for transcoding audio.
    """
    
    audio_packing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioPackingMode') }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitRate') }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    codec_options: Optional[AudioCodecOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecOptions') }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    
