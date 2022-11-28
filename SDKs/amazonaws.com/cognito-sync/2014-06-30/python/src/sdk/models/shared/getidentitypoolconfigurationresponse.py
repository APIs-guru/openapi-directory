from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetIdentityPoolConfigurationResponse:
    r"""GetIdentityPoolConfigurationResponse
    The output for the GetIdentityPoolConfiguration operation.
    """
    
    cognito_streams: Optional[CognitoStreams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoStreams') }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    push_sync: Optional[PushSync] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushSync') }})
    
