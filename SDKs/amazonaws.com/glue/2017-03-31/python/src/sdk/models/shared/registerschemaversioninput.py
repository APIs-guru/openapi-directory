from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import schemaid


@dataclass_json
@dataclass
class RegisterSchemaVersionInput:
    schema_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDefinition' }})
    schema_id: schemaid.SchemaID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    
