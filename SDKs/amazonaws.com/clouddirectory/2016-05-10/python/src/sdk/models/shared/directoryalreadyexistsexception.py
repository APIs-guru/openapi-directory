from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DirectoryAlreadyExistsException:
    r"""DirectoryAlreadyExistsException
    Indicates that a <a>Directory</a> could not be created due to a naming conflict. Choose a different name and try again.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
