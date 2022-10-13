from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import computetype_enum


@dataclass_json
@dataclass
class ResourceConfiguration:
    compute_type: computetype_enum.ComputeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeType' }})
    volume_size_in_gb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeSizeInGB' }})
    
