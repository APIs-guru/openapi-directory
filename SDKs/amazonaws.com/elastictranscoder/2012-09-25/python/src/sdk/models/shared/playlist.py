from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Playlist:
    r"""Playlist
     Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. 
    """
    
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    hls_content_protection: Optional[HlsContentProtection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HlsContentProtection') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeys') }})
    play_ready_drm: Optional[PlayReadyDrm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayReadyDrm') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetail') }})
    
