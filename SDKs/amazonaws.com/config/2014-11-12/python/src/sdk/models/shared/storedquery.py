from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StoredQuery:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    query_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryArn' }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryId' }})
    query_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryName' }})
    
