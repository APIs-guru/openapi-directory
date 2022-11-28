from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HostVolumeProperties:
    r"""HostVolumeProperties
    Details on a container instance bind mount host volume.
    """
    
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    
