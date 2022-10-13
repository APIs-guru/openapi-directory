from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemaid


@dataclass_json
@dataclass
class ListSchemaVersionsInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_id: schemaid.SchemaID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    
