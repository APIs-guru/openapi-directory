from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authorizationtype_enum
from . import awsiamconfig


@dataclass_json
@dataclass
class AuthorizationConfig:
    authorization_type: authorizationtype_enum.AuthorizationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationType' }})
    aws_iam_config: Optional[awsiamconfig.AwsIamConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIamConfig' }})
    
