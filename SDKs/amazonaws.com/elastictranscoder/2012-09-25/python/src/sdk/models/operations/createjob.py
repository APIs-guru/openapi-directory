from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateJobRequestBodyInput:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Container' }})
    detected_properties: Optional[shared.DetectedProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectedProperties' }})
    encryption: Optional[shared.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    input_captions: Optional[shared.InputCaptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputCaptions' }})
    interlaced: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interlaced' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resolution' }})
    time_span: Optional[shared.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSpan' }})
    

@dataclass_json
@dataclass
class CreateJobRequestBodyOutput:
    album_art: Optional[shared.JobAlbumArt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArt' }})
    captions: Optional[shared.Captions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Captions' }})
    composition: Optional[List[shared.Clip]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Composition' }})
    encryption: Optional[shared.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    preset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetId' }})
    rotate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rotate' }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentDuration' }})
    thumbnail_encryption: Optional[shared.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailEncryption' }})
    thumbnail_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailPattern' }})
    watermarks: Optional[List[shared.JobWatermark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Watermarks' }})
    

@dataclass_json
@dataclass
class CreateJobRequestBody:
    input: Optional[CreateJobRequestBodyInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    inputs: Optional[List[shared.JobInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inputs' }})
    output: Optional[CreateJobRequestBodyOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    output_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKeyPrefix' }})
    outputs: Optional[List[shared.CreateJobOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    pipeline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineId' }})
    playlists: Optional[List[shared.CreateJobPlaylist]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Playlists' }})
    user_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMetadata' }})
    

@dataclass
class CreateJobRequest:
    headers: CreateJobHeaders = field(default=None)
    request: CreateJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJobResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_job_response: Optional[shared.CreateJobResponse] = field(default=None)
    incompatible_version_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
