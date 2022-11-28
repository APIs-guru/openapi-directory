from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperatorConfiguration:
    operator_type: OperatorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorType') }})
    dbt: Optional[OperatorDbt] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbt') }})
    normalization: Optional[OperatorNormalization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalization') }})
    
