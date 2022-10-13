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
class CreateJobOutput:
    album_art: Optional[jobalbumart.JobAlbumArt] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArt' }})
    captions: Optional[captions.Captions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Captions' }})
    composition: Optional[List[clip.Clip]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Composition' }})
    encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encryption' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    preset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetId' }})
    rotate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rotate' }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentDuration' }})
    thumbnail_encryption: Optional[encryption.Encryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailEncryption' }})
    thumbnail_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailPattern' }})
    watermarks: Optional[List[jobwatermark.JobWatermark]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Watermarks' }})
    
