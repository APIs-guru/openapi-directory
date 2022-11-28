from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckSchemaVersionValidityInput:
    data_format: DataFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    schema_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDefinition') }})
    
