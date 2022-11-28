from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PosixUser:
    r"""PosixUser
    The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
    """
    
    gid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    uid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    secondary_gids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryGids') }})
    
