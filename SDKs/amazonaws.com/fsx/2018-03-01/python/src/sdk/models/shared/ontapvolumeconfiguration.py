from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import flexcacheendpointtype_enum
from . import ontapvolumetype_enum
from . import securitystyle_enum
from . import tieringpolicy


@dataclass_json
@dataclass
class OntapVolumeConfiguration:
    flex_cache_endpoint_type: Optional[flexcacheendpointtype_enum.FlexCacheEndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlexCacheEndpointType' }})
    junction_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JunctionPath' }})
    ontap_volume_type: Optional[ontapvolumetype_enum.OntapVolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OntapVolumeType' }})
    security_style: Optional[securitystyle_enum.SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityStyle' }})
    size_in_megabytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInMegabytes' }})
    storage_efficiency_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageEfficiencyEnabled' }})
    storage_virtual_machine_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineId' }})
    storage_virtual_machine_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageVirtualMachineRoot' }})
    tiering_policy: Optional[tieringpolicy.TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TieringPolicy' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UUID' }})
    
