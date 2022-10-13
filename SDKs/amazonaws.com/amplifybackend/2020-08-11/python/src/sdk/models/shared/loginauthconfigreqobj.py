from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoginAuthConfigReqObj:
    aws_cognito_identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCognitoIdentityPoolId' }})
    aws_cognito_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsCognitoRegion' }})
    aws_user_pools_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsUserPoolsId' }})
    aws_user_pools_web_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsUserPoolsWebClientId' }})
    
