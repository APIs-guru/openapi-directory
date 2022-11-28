from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchStatementRequest:
    r"""BatchStatementRequest
     A PartiQL batch statement request. 
    """
    
    statement: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statement') }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    parameters: Optional[List[AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
