from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import schemastatus_enum


@dataclass_json
@dataclass
class SchemaListItem:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    registry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryName' }})
    schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaArn' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaName' }})
    schema_status: Optional[schemastatus_enum.SchemaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaStatus' }})
    updated_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime' }})
    
