from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemaversionlistitem


@dataclass_json
@dataclass
class ListSchemaVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schemas: Optional[List[schemaversionlistitem.SchemaVersionListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schemas' }})
    
