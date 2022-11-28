from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaReference:
    r"""SchemaReference
    An object that references a schema stored in the Glue Schema Registry.
    """
    
    schema_id: Optional[SchemaID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaId') }})
    schema_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionId') }})
    schema_version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersionNumber') }})
    
