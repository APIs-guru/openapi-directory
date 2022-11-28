from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveSchemaVersionMetadataInput:
    metadata_key_value: MetadataKeyValuePair = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataKeyValue') }})
    schema_id: Optional[SchemaID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_number: Optional[SchemaVersionNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
