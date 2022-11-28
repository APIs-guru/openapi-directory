from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceDetail:
    r"""SourceDetail
    Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. 
    """
    
    event_source: Optional[EventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    maximum_execution_frequency: Optional[MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionFrequency') }})
    message_type: Optional[MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    
