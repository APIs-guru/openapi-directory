from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import analyticsmetadatatype
from . import usercontextdatatype


@dataclass_json
@dataclass
class ConfirmForgotPasswordRequest:
    analytics_metadata: Optional[analyticsmetadatatype.AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsMetadata' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    confirmation_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfirmationCode' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    secret_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretHash' }})
    user_context_data: Optional[usercontextdatatype.UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserContextData' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
