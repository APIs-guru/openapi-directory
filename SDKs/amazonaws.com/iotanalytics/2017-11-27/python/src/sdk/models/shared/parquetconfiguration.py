from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schemadefinition


@dataclass_json
@dataclass
class ParquetConfiguration:
    schema_definition: Optional[schemadefinition.SchemaDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaDefinition' }})
    
