from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import registrystatus_enum


@dataclass_json
@dataclass
class GetRegistryResponse:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryArn' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryName' }})
    status: Optional[registrystatus_enum.RegistryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime' }})
    
