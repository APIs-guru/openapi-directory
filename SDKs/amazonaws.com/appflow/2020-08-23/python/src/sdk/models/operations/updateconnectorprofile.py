from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateConnectorProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateConnectorProfileRequestBodyConnectionModeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"


@dataclass_json
@dataclass
class UpdateConnectorProfileRequestBodyConnectorProfileConfig:
    connector_profile_credentials: Optional[shared.ConnectorProfileCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileCredentials' }})
    connector_profile_properties: Optional[shared.ConnectorProfileProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileProperties' }})
    

@dataclass_json
@dataclass
class UpdateConnectorProfileRequestBody:
    connection_mode: UpdateConnectorProfileRequestBodyConnectionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionMode' }})
    connector_profile_config: UpdateConnectorProfileRequestBodyConnectorProfileConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileConfig' }})
    connector_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    

@dataclass
class UpdateConnectorProfileRequest:
    headers: UpdateConnectorProfileHeaders = field(default=None)
    request: UpdateConnectorProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConnectorProfileResponse:
    conflict_exception: Optional[Any] = field(default=None)
    connector_authentication_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_connector_profile_response: Optional[shared.UpdateConnectorProfileResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
