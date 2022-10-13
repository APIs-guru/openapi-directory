from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import schemaversionnumber
from . import schemadifftype_enum
from . import schemaid
from . import schemaversionnumber


@dataclass_json
@dataclass
class GetSchemaVersionsDiffInput:
    first_schema_version_number: schemaversionnumber.SchemaVersionNumber = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstSchemaVersionNumber' }})
    schema_diff_type: schemadifftype_enum.SchemaDiffTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaDiffType' }})
    schema_id: schemaid.SchemaID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaId' }})
    second_schema_version_number: schemaversionnumber.SchemaVersionNumber = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondSchemaVersionNumber' }})
    
