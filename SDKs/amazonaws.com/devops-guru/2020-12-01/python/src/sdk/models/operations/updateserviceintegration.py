from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateServiceIntegrationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateServiceIntegrationRequestBodyServiceIntegration:
    r"""UpdateServiceIntegrationRequestBodyServiceIntegration
     Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru. 
    """
    
    ops_center: Optional[shared.OpsCenterIntegrationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsCenter') }})
    

@dataclass_json
@dataclass
class UpdateServiceIntegrationRequestBody:
    service_integration: UpdateServiceIntegrationRequestBodyServiceIntegration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIntegration') }})
    

@dataclass
class UpdateServiceIntegrationRequest:
    headers: UpdateServiceIntegrationHeaders = field()
    request: UpdateServiceIntegrationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateServiceIntegrationResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_service_integration_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
