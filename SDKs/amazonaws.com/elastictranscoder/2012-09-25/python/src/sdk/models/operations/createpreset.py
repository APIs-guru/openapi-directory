from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePresetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyAudio:
    audio_packing_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioPackingMode' }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitRate' }})
    channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channels' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    codec_options: Optional[shared.AudioCodecOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecOptions' }})
    sample_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyThumbnails:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHeight' }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWidth' }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaddingPolicy' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resolution' }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizingPolicy' }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBodyVideo:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    bit_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitRate' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    codec_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecOptions' }})
    display_aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayAspectRatio' }})
    fixed_gop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedGOP' }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    keyframes_max_dist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyframesMaxDist' }})
    max_frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFrameRate' }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHeight' }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWidth' }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaddingPolicy' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resolution' }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizingPolicy' }})
    watermarks: Optional[List[shared.PresetWatermark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Watermarks' }})
    

@dataclass_json
@dataclass
class CreatePresetRequestBody:
    audio: Optional[CreatePresetRequestBodyAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Audio' }})
    container: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    thumbnails: Optional[CreatePresetRequestBodyThumbnails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Thumbnails' }})
    video: Optional[CreatePresetRequestBodyVideo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Video' }})
    

@dataclass
class CreatePresetRequest:
    headers: CreatePresetHeaders = field(default=None)
    request: CreatePresetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePresetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_preset_response: Optional[shared.CreatePresetResponse] = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
