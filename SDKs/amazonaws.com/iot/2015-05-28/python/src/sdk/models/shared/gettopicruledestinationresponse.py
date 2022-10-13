from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import topicruledestination


@dataclass_json
@dataclass
class GetTopicRuleDestinationResponse:
    topic_rule_destination: Optional[topicruledestination.TopicRuleDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicRuleDestination' }})
    
