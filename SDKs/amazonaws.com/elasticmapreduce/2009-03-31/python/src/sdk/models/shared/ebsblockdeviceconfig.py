from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import volumespecification


@dataclass_json
@dataclass
class EbsBlockDeviceConfig:
    volume_specification: volumespecification.VolumeSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSpecification' }})
    volumes_per_instance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumesPerInstance' }})
    
