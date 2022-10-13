from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import faileditemerrorcode_enum


@dataclass_json
@dataclass
class FailedItemDetails:
    failure_code: faileditemerrorcode_enum.FailedItemErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    retryable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryable' }})
    
