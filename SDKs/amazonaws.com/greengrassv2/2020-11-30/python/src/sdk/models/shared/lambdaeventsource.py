from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaEventSource:
    r"""LambdaEventSource
    Contains information about an event source for an Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
    """
    
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    type: LambdaEventSourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
