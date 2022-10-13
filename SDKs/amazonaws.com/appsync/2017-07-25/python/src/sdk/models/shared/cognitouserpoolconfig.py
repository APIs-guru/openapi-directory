from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CognitoUserPoolConfig:
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIdClientRegex' }})
    aws_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolId' }})
    
