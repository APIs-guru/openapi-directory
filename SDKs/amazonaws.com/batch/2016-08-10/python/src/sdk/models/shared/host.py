from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Host:
    r"""Host
    Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to persist after the containers associated with it stop running.
    """
    
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    
