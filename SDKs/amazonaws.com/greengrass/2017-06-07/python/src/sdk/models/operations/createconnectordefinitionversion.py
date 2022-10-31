from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateConnectorDefinitionVersionPathParams:
    connector_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ConnectorDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConnectorDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amzn_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amzn-Client-Token', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateConnectorDefinitionVersionRequestBody:
    connectors: Optional[List[shared.Connector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connectors' }})
    

@dataclass
class CreateConnectorDefinitionVersionRequest:
    path_params: CreateConnectorDefinitionVersionPathParams = field(default=None)
    headers: CreateConnectorDefinitionVersionHeaders = field(default=None)
    request: CreateConnectorDefinitionVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectorDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_connector_definition_version_response: Optional[shared.CreateConnectorDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
