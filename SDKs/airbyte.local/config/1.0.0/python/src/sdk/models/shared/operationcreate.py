from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import operatorconfiguration


@dataclass_json
@dataclass
class OperationCreate:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator_configuration: operatorconfiguration.OperatorConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorConfiguration' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
