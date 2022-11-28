from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListIndex:
    r"""BatchListIndex
    Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    index_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexReference') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    ranges_on_indexed_values: Optional[List[ObjectAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangesOnIndexedValues') }})
    
