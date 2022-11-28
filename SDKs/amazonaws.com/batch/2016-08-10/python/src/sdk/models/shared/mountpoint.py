from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MountPoint:
    r"""MountPoint
    Details on a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href=\"https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container\">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.
    """
    
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPath') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    source_volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVolume') }})
    
