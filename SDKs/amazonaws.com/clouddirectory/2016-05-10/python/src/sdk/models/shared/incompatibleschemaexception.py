from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncompatibleSchemaException:
    r"""IncompatibleSchemaException
    Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
