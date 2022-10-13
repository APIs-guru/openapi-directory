from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionenginetype_enum


@dataclass_json
@dataclass
class ExecutionEngineConfig:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    master_instance_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterInstanceSecurityGroupId' }})
    type: Optional[executionenginetype_enum.ExecutionEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
