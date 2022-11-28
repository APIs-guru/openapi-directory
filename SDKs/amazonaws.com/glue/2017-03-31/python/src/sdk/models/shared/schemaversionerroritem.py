from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SchemaVersionErrorItem:
    r"""SchemaVersionErrorItem
    An object that contains the error details for an operation on a schema version.
    """
    
    error_details: Optional[ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionNumber') }})
    
