from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SqsParameters:
    r"""SqsParameters
    This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
    """
    
    message_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageGroupId') }})
    
