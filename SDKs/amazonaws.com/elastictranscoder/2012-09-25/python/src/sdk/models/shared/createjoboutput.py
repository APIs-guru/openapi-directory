from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateJobOutput:
    r"""CreateJobOutput
    The <code>CreateJobOutput</code> structure.
    """
    
    album_art: Optional[JobAlbumArt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArt') }})
    captions: Optional[Captions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Captions') }})
    composition: Optional[List[Clip]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Composition') }})
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    preset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetId') }})
    rotate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rotate') }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDuration') }})
    thumbnail_encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailEncryption') }})
    thumbnail_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailPattern') }})
    watermarks: Optional[List[JobWatermark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    
