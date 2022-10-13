from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import analyticsmetadatatype
from . import authflowtype_enum
from . import contextdatatype


@dataclass_json
@dataclass
class AdminInitiateAuthRequest:
    analytics_metadata: Optional[analyticsmetadatatype.AnalyticsMetadataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalyticsMetadata' }})
    auth_flow: authflowtype_enum.AuthFlowTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthFlow' }})
    auth_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthParameters' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientMetadata' }})
    context_data: Optional[contextdatatype.ContextDataType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextData' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
