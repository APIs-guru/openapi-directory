from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connection


@dataclass_json
@dataclass
class GetConnectionResponse:
    connection: Optional[connection.Connection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connection' }})
    
