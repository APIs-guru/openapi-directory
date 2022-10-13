from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hlscontentprotection
from . import playreadydrm


@dataclass_json
@dataclass
class CreateJobPlaylist:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    hls_content_protection: Optional[hlscontentprotection.HlsContentProtection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HlsContentProtection' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKeys' }})
    play_ready_drm: Optional[playreadydrm.PlayReadyDrm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayReadyDrm' }})
    
