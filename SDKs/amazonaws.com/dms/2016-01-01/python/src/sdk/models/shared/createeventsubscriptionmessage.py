from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateEventSubscriptionMessage:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategories' }})
    sns_topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    source_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIds' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    subscription_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
