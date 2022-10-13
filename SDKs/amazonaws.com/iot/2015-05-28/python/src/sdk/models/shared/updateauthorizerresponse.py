from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateAuthorizerResponse:
    authorizer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerArn' }})
    authorizer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerName' }})
    
