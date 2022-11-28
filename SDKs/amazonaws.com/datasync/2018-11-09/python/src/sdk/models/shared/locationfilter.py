from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationFilter:
    r"""LocationFilter
    You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
    """
    
    name: LocationFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operator: OperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
