from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import unsharetarget


@dataclass_json
@dataclass
class UnshareDirectoryRequest:
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    unshare_target: unsharetarget.UnshareTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnshareTarget' }})
    
