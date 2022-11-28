from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CognitoUserPoolConfig:
    r"""CognitoUserPoolConfig
    Describes an Amazon Cognito user pool configuration.
    """
    
    aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolId') }})
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIdClientRegex') }})
    
