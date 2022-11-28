from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuiteRunConfiguration:
    r"""SuiteRunConfiguration
    Gets suite run configuration.
    """
    
    primary_device: Optional[DeviceUnderTest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDevice') }})
    selected_test_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedTestList') }})
    
