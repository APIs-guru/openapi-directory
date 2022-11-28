from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTestResult:
    r"""GetTestResult
    Represents the result of a get test request.
    """
    
    test: Optional[Test] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    
