from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import errorhandlingconfig
from . import writeoperationtype_enum


@dataclass_json
@dataclass
class SalesforceDestinationProperties:
    error_handling_config: Optional[errorhandlingconfig.ErrorHandlingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorHandlingConfig' }})
    id_field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idFieldNames' }})
    object: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    write_operation_type: Optional[writeoperationtype_enum.WriteOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeOperationType' }})
    
