from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegistryID:
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryArn' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryName' }})
    
