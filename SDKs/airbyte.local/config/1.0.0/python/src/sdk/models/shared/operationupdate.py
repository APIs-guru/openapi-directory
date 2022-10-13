from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import operatorconfiguration


@dataclass_json
@dataclass
class OperationUpdate:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    operator_configuration: operatorconfiguration.OperatorConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorConfiguration' }})
    
