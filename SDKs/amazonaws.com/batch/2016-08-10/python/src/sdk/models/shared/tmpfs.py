from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tmpfs:
    r"""Tmpfs
    <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
    """
    
    container_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    
