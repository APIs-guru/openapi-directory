from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import operatorconfiguration


@dataclass_json
@dataclass
class WebBackendOperationCreateOrUpdate:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    operator_configuration: operatorconfiguration.OperatorConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorConfiguration' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
