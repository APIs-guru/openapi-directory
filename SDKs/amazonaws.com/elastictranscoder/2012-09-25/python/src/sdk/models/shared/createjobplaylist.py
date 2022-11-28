from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateJobPlaylist:
    r"""CreateJobPlaylist
    Information about the master playlist.
    """
    
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    hls_content_protection: Optional[HlsContentProtection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HlsContentProtection') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeys') }})
    play_ready_drm: Optional[PlayReadyDrm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayReadyDrm') }})
    
