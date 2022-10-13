from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TopicRuleListItem:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleArn' }})
    rule_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleDisabled' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    topic_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicPattern' }})
    
