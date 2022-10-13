from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import database


@dataclass_json
@dataclass
class ListDatabasesOutput:
    database_list: Optional[List[database.Database]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
