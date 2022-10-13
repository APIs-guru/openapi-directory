from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobalbumart
from . import captions
from . import clip
from . import encryption
from . import encryption
from . import jobwatermark


@dataclass_json
@dataclass
class JobOutput:
    album_art: Optional[jobalbumart.JobAlbumArt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArt' }})
    applied_color_space_conversion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppliedColorSpaceConversion' }})
    captions: Optional[captions.Captions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Captions' }})
    composition: Optional[List[clip.Clip]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Composition' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationMillis' }})
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSize' }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameRate' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    preset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetId' }})
    rotate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rotate' }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentDuration' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetail' }})
    thumbnail_encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailEncryption' }})
    thumbnail_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailPattern' }})
    watermarks: Optional[List[jobwatermark.JobWatermark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Watermarks' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
