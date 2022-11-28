from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteSchemaVersionsInput:
    schema_id: SchemaID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    versions: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Versions') }})
    
