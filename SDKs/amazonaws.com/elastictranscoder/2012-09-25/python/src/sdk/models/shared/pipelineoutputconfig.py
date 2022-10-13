from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import permission


@dataclass_json
@dataclass
class PipelineOutputConfig:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    permissions: Optional[List[permission.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    
