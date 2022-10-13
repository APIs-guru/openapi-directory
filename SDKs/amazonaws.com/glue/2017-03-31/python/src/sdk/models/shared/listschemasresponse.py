from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemalistitem


@dataclass_json
@dataclass
class ListSchemasResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schemas: Optional[List[schemalistitem.SchemaListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schemas' }})
    
