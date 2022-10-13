from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharemethod_enum
from . import sharetarget


@dataclass_json
@dataclass
class ShareDirectoryRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    share_method: sharemethod_enum.ShareMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareMethod' }})
    share_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareNotes' }})
    share_target: sharetarget.ShareTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareTarget' }})
    
