from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetComplianceDetailsByResourceQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetComplianceDetailsByResourceXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_RESOURCE = "StarlingDoveService.GetComplianceDetailsByResource"


@dataclass
class GetComplianceDetailsByResourceHeaders:
    x_amz_target: GetComplianceDetailsByResourceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComplianceDetailsByResourceRequest:
    headers: GetComplianceDetailsByResourceHeaders = field()
    query_params: GetComplianceDetailsByResourceQueryParams = field()
    request: shared.GetComplianceDetailsByResourceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetComplianceDetailsByResourceResponse:
    content_type: str = field()
    status_code: int = field()
    get_compliance_details_by_resource_response: Optional[shared.GetComplianceDetailsByResourceResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    
