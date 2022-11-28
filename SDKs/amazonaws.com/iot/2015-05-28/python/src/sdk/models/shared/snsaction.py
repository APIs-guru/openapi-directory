from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SnsAction:
    r"""SnsAction
    Describes an action to publish to an Amazon SNS topic.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    target_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    message_format: Optional[MessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    
