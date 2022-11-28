from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSchemaInput:
    data_format: DataFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    schema_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaName') }})
    compatibility: Optional[CompatibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compatibility') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    registry_id: Optional[RegistryID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryId') }})
    schema_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaDefinition') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
