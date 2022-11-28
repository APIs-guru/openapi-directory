from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScanOutput:
    r"""ScanOutput
    Represents the output of a <code>Scan</code> operation.
    """
    
    consumed_capacity: Optional[ConsumedCapacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacity') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    items: Optional[List[dict[str, AttributeValue]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    last_evaluated_key: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedKey') }})
    scanned_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScannedCount') }})
    
