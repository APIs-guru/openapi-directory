from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchResponse:
    r"""BatchResponse
    The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
    """
    
    consumed_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacityUnits') }})
    items: Optional[List[dict[str, AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
