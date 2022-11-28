from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Function:
    r"""Function
    Information about a Lambda function.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    function_configuration: Optional[FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionConfiguration') }})
    
