from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreatePresetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyAudio:
    r"""CreatePresetRequestBodyAudio
    Parameters required for transcoding audio.
    """
    
    audio_packing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioPackingMode') }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitRate') }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    codec_options: Optional[shared.AudioCodecOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecOptions') }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleRate') }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyThumbnails:
    r"""CreatePresetRequestBodyThumbnails
    Thumbnails for videos.
    """
    
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHeight') }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWidth') }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingPolicy') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizingPolicy') }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyVideo:
    r"""CreatePresetRequestBodyVideo
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
    watermarks: Optional[List[shared.PresetWatermark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBody:
    container: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    audio: Optional[CreatePresetRequestBodyAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Audio') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    thumbnails: Optional[CreatePresetRequestBodyThumbnails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Thumbnails') }})
    video: Optional[CreatePresetRequestBodyVideo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Video') }})
    

@dataclass
class CreatePresetRequest:
    headers: CreatePresetHeaders = field()
    request: CreatePresetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePresetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_preset_response: Optional[shared.CreatePresetResponse] = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
