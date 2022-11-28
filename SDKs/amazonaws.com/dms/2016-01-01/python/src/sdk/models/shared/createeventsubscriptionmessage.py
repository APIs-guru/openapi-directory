from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEventSubscriptionMessage:
    r"""CreateEventSubscriptionMessage
    <p/>
    """
    
    sns_topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    subscription_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionName') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventCategories') }})
    source_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIds') }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
