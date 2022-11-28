from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SnsTopicPublishAction:
    r"""SnsTopicPublishAction
    Information required to publish the Amazon SNS message.
    """
    
    target_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
