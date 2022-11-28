from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTopicRuleDestinationResponse:
    topic_rule_destination: Optional[TopicRuleDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicRuleDestination') }})
    
