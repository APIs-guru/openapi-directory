from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeSpecification:
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    size_in_gb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInGB' }})
    volume_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
