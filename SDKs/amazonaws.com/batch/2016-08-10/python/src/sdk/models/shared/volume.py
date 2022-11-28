from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    A data volume used in a job's container properties.
    """
    
    efs_volume_configuration: Optional[EfsVolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('efsVolumeConfiguration') }})
    host: Optional[Host] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
