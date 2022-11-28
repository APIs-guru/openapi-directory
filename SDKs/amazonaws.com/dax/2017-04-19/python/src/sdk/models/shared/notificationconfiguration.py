from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
    """
    
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicArn') }})
    topic_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicStatus') }})
    
