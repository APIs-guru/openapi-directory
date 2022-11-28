from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataRepositoryTaskFilter:
    r"""DataRepositoryTaskFilter
    (Optional) An array of filter objects you can use to filter the response of data repository tasks you will see in the the response. You can filter the tasks returned in the response by one or more file system IDs, task lifecycles, and by task type. A filter object consists of a filter <code>Name</code>, and one or more <code>Values</code> for the filter.
    """
    
    name: Optional[DataRepositoryTaskFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
