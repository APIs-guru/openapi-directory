from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OntapVolumeConfiguration:
    r"""OntapVolumeConfiguration
    The configuration of an Amazon FSx for NetApp ONTAP volume
    """
    
    flex_cache_endpoint_type: Optional[FlexCacheEndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlexCacheEndpointType') }})
    junction_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JunctionPath') }})
    ontap_volume_type: Optional[OntapVolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OntapVolumeType') }})
    security_style: Optional[SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityStyle') }})
    size_in_megabytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeInMegabytes') }})
    storage_efficiency_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageEfficiencyEnabled') }})
    storage_virtual_machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageVirtualMachineId') }})
    storage_virtual_machine_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageVirtualMachineRoot') }})
    tiering_policy: Optional[TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TieringPolicy') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UUID') }})
    
