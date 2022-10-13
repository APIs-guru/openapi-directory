from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import schemaid


@dataclass_json
@dataclass
class GetSchemaInput:
    schema_id: schemaid.SchemaID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    
