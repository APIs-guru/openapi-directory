from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import volumespecification


@dataclass_json
@dataclass
class EbsBlockDevice:
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Device' }})
    volume_specification: Optional[volumespecification.VolumeSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSpecification' }})
    
