from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import connection


@dataclass_json
@dataclass
class CreateConnectionResponse:
    connection: connection.Connection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connection' }})
    
