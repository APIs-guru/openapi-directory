from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RegisterClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RegisterClusterRequestBodyConnectorConfig:
    r"""RegisterClusterRequestBodyConnectorConfig
    The configuration sent to a cluster for configuration.
    """
    
    provider: Optional[shared.ConnectorConfigProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    

@dataclass_json
@dataclass
class RegisterClusterRequestBody:
    connector_config: RegisterClusterRequestBodyConnectorConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorConfig') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    

@dataclass
class RegisterClusterRequest:
    headers: RegisterClusterHeaders = field()
    request: RegisterClusterRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterClusterResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    register_cluster_response: Optional[shared.RegisterClusterResponse] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
