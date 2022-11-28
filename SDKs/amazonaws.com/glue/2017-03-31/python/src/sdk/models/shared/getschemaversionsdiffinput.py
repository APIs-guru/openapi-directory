from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSchemaVersionsDiffInput:
    first_schema_version_number: SchemaVersionNumber = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstSchemaVersionNumber') }})
    schema_diff_type: SchemaDiffTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDiffType') }})
    schema_id: SchemaID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    second_schema_version_number: SchemaVersionNumber = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondSchemaVersionNumber') }})
    
