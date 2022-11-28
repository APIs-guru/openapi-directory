from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchemaAlreadyExistsException:
    r"""SchemaAlreadyExistsException
    Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
