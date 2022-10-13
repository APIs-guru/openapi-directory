from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cognitostreams
from . import pushsync


@dataclass_json
@dataclass
class SetIdentityPoolConfigurationResponse:
    cognito_streams: Optional[cognitostreams.CognitoStreams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoStreams' }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    push_sync: Optional[pushsync.PushSync] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PushSync' }})
    
