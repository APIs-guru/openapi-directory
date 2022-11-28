from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaAction:
    r"""LambdaAction
    Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    """
    
    function_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionArn') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
