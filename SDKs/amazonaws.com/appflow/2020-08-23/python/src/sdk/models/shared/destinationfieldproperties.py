from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import writeoperationtype_enum


@dataclass_json
@dataclass
class DestinationFieldProperties:
    is_creatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCreatable' }})
    is_nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNullable' }})
    is_updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUpdatable' }})
    is_upsertable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUpsertable' }})
    supported_write_operations: Optional[List[writeoperationtype_enum.WriteOperationTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedWriteOperations' }})
    
