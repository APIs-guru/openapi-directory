from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateOntapVolumeConfiguration:
    r"""CreateOntapVolumeConfiguration
    Specifies the configuration of the ONTAP volume that you are creating.
    """
    
    junction_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JunctionPath') }})
    size_in_megabytes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInMegabytes') }})
    storage_efficiency_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageEfficiencyEnabled') }})
    storage_virtual_machine_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageVirtualMachineId') }})
    security_style: Optional[SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityStyle') }})
    tiering_policy: Optional[TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TieringPolicy') }})
    
