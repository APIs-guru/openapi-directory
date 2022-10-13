from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemaversionerroritem


@dataclass_json
@dataclass
class DeleteSchemaVersionsResponse:
    schema_version_errors: Optional[List[schemaversionerroritem.SchemaVersionErrorItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionErrors' }})
    
