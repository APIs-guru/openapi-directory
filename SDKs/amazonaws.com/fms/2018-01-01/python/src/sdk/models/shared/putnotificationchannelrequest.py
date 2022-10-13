from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutNotificationChannelRequest:
    sns_role_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsRoleName' }})
    sns_topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicArn' }})
    
