from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteRemediationConfigurationXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_REMEDIATION_CONFIGURATION = "StarlingDoveService.DeleteRemediationConfiguration"


@dataclass
class DeleteRemediationConfigurationHeaders:
    x_amz_target: DeleteRemediationConfigurationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRemediationConfigurationRequest:
    headers: DeleteRemediationConfigurationHeaders = field()
    request: shared.DeleteRemediationConfigurationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteRemediationConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    delete_remediation_configuration_response: Optional[dict[str, Any]] = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    no_such_remediation_configuration_exception: Optional[Any] = field(default=None)
    remediation_in_progress_exception: Optional[Any] = field(default=None)
    
