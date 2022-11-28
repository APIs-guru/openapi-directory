from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteRequest:
    r"""DeleteRequest
    A container for a Delete BatchWrite request
    """
    
    key: Key = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
