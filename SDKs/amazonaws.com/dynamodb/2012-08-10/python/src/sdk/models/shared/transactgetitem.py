from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactGetItem:
    r"""TransactGetItem
    Specifies an item to be retrieved as part of the transaction.
    """
    
    get: Get = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Get') }})
    
