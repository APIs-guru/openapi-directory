from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tmpfs:
    r"""Tmpfs
    The container path, mount options, and size of the tmpfs mount.
    """
    
    container_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    
