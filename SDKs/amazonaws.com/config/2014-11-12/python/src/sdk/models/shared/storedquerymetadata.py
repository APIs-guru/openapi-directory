from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StoredQueryMetadata:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    query_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryArn' }})
    query_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryId' }})
    query_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryName' }})
    
