from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreStatistics:
    r"""DatastoreStatistics
    Statistical information about the data store.
    """
    
    size: Optional[EstimatedResourceSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
