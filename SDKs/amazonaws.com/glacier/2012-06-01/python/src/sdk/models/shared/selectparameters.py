from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SelectParameters:
    r"""SelectParameters
    Contains information about the parameters used for a select.
    """
    
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    expression_type: Optional[ExpressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpressionType') }})
    input_serialization: Optional[InputSerialization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSerialization') }})
    output_serialization: Optional[OutputSerialization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputSerialization') }})
    
