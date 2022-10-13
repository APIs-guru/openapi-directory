from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BackendAPIAppSyncAuthSettings:
    cognito_user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoUserPoolId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expiration_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationTime' }})
    open_id_auth_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIDAuthTTL' }})
    open_id_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIDClientId' }})
    open_id_iat_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIDIatTTL' }})
    open_id_issue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIDIssueURL' }})
    open_id_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenIDProviderName' }})
    
