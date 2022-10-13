from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import database


@dataclass_json
@dataclass
class GetDatabaseOutput:
    database: Optional[database.Database] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    
