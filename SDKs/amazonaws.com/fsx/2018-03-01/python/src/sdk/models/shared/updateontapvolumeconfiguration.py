from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import securitystyle_enum
from . import tieringpolicy


@dataclass_json
@dataclass
class UpdateOntapVolumeConfiguration:
    junction_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JunctionPath' }})
    security_style: Optional[securitystyle_enum.SecurityStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityStyle' }})
    size_in_megabytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInMegabytes' }})
    storage_efficiency_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageEfficiencyEnabled' }})
    tiering_policy: Optional[tieringpolicy.TieringPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TieringPolicy' }})
    
