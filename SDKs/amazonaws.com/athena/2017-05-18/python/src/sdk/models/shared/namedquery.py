from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NamedQuery:
    database: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Database' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    named_query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamedQueryId' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
