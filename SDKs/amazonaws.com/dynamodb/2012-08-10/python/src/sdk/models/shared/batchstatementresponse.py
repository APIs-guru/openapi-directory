from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchStatementResponse:
    r"""BatchStatementResponse
     A PartiQL batch statement response.. 
    """
    
    error: Optional[BatchStatementError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    item: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
