from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SqsAction:
    queue_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueUrl' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    use_base64: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useBase64' }})
    
