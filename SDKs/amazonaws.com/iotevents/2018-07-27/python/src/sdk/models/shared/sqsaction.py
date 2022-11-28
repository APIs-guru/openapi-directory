from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SqsAction:
    r"""SqsAction
    Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
    """
    
    queue_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueUrl') }})
    payload: Optional[Payload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    use_base64: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useBase64') }})
    
