from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackendAPIAppSyncAuthSettings:
    r"""BackendAPIAppSyncAuthSettings
    The authentication settings for accessing provisioned data models in your Amplify project.
    """
    
    cognito_user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoUserPoolId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    expiration_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationTime') }})
    open_id_auth_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDAuthTTL') }})
    open_id_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDClientId') }})
    open_id_iat_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDIatTTL') }})
    open_id_issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDIssueURL') }})
    open_id_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenIDProviderName') }})
    
