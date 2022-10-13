from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import audiocodecoptions


@dataclass_json
@dataclass
class AudioParameters:
    audio_packing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioPackingMode' }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitRate' }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channels' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    codec_options: Optional[audiocodecoptions.AudioCodecOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecOptions' }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    
