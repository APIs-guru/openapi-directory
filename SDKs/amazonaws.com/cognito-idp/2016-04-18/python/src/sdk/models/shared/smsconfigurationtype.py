from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SmsConfigurationType:
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalId' }})
    sns_caller_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsCallerArn' }})
    
