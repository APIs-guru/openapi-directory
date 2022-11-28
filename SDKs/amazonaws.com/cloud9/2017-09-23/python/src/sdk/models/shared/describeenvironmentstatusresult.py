from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEnvironmentStatusResult:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: EnvironmentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
