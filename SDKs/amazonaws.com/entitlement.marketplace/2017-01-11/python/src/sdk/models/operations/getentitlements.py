from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetEntitlementsXAmzTargetEnum(str, Enum):
    AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS = "AWSMPEntitlementService.GetEntitlements"


@dataclass
class GetEntitlementsHeaders:
    x_amz_target: GetEntitlementsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEntitlementsRequest:
    headers: GetEntitlementsHeaders = field()
    request: shared.GetEntitlementsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEntitlementsResponse:
    content_type: str = field()
    status_code: int = field()
    get_entitlements_result: Optional[shared.GetEntitlementsResult] = field(default=None)
    internal_service_error_exception: Optional[shared.InternalServiceErrorException] = field(default=None)
    invalid_parameter_exception: Optional[shared.InvalidParameterException] = field(default=None)
    throttling_exception: Optional[shared.ThrottlingException] = field(default=None)
    
