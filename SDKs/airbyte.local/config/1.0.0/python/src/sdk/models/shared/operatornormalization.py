from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OperatorNormalizationOptionEnum(str, Enum):
    BASIC = "basic"


@dataclass_json
@dataclass
class OperatorNormalization:
    option: Optional[OperatorNormalizationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    
