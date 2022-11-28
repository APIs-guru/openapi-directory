from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RetryBuildBatchInput:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    retry_type: Optional[RetryBuildBatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryType') }})
    
