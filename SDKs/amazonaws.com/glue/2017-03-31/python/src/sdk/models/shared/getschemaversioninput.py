from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schemaid
from . import schemaversionnumber


@dataclass_json
@dataclass
class GetSchemaVersionInput:
    schema_id: Optional[schemaid.SchemaID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionId' }})
    schema_version_number: Optional[schemaversionnumber.SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionNumber' }})
    
