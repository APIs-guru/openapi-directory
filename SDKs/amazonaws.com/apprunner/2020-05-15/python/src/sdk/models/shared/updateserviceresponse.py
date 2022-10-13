from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import service


@dataclass_json
@dataclass
class UpdateServiceResponse:
    operation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationId' }})
    service: service.Service = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    
