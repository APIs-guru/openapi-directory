from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterSchemaVersionInput:
    schema_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDefinition') }})
    schema_id: SchemaID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    
