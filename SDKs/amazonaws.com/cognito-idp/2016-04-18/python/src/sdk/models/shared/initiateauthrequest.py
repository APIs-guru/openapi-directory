from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analyticsmetadatatype
from . import authflowtype_enum
from . import usercontextdatatype


@dataclass_json
@dataclass
class InitiateAuthRequest:
    analytics_metadata: Optional[analyticsmetadatatype.AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsMetadata' }})
    auth_flow: authflowtype_enum.AuthFlowTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthFlow' }})
    auth_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthParameters' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    user_context_data: Optional[usercontextdatatype.UserContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserContextData' }})
    
