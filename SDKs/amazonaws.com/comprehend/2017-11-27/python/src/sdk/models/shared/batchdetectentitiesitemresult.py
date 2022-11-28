from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDetectEntitiesItemResult:
    r"""BatchDetectEntitiesItemResult
    The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
    """
    
    entities: Optional[List[Entity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    
