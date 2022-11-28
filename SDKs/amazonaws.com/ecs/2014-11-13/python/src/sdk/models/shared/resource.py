from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Resource:
    r"""Resource
    Describes the resources available for a container instance.
    """
    
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    long_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    string_set_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringSetValue') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
