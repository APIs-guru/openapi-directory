from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compatibility_enum
from . import schemaid
from . import schemaversionnumber


@dataclass_json
@dataclass
class UpdateSchemaInput:
    compatibility: Optional[compatibility_enum.CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Compatibility' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    schema_id: schemaid.SchemaID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    schema_version_number: Optional[schemaversionnumber.SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersionNumber' }})
    
