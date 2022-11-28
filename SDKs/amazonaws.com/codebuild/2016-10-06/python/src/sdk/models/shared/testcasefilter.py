from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestCaseFilter:
    r"""TestCaseFilter
    A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
    """
    
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
