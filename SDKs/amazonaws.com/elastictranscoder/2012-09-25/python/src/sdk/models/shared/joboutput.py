from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobOutput:
    r"""JobOutput
    <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
    """
    
    album_art: Optional[JobAlbumArt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArt') }})
    applied_color_space_conversion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppliedColorSpaceConversion') }})
    captions: Optional[Captions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Captions') }})
    composition: Optional[List[Clip]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Composition') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    duration_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationMillis') }})
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSize') }})
    frame_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FrameRate') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    preset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetId') }})
    rotate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rotate') }})
    segment_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDuration') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetail') }})
    thumbnail_encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailEncryption') }})
    thumbnail_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailPattern') }})
    watermarks: Optional[List[JobWatermark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    
