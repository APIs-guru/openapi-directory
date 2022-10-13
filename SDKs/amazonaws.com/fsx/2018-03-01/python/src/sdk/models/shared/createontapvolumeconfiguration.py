from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import securitystyle_enum
from . import tieringpolicy


@dataclass_json
@dataclass
class CreateOntapVolumeConfiguration:
    junction_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JunctionPath' }})
    security_style: Optional[securitystyle_enum.SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityStyle' }})
    size_in_megabytes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInMegabytes' }})
    storage_efficiency_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageEfficiencyEnabled' }})
    storage_virtual_machine_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    tiering_policy: Optional[tieringpolicy.TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TieringPolicy' }})
    
