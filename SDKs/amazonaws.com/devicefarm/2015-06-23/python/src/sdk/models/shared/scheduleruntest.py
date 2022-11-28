from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleRunTest:
    r"""ScheduleRunTest
    Represents test settings. This data structure is passed in as the test parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.
    """
    
    type: TestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    test_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPackageArn') }})
    test_spec_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecArn') }})
    
