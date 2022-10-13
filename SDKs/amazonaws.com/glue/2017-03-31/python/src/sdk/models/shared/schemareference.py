from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schemaid


@dataclass_json
@dataclass
class SchemaReference:
    schema_id: Optional[schemaid.SchemaID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    schema_version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionNumber' }})
    
