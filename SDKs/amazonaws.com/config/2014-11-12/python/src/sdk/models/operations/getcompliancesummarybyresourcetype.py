from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetComplianceSummaryByResourceTypeXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_SUMMARY_BY_RESOURCE_TYPE = "StarlingDoveService.GetComplianceSummaryByResourceType"


@dataclass
class GetComplianceSummaryByResourceTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetComplianceSummaryByResourceTypeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComplianceSummaryByResourceTypeRequest:
    headers: GetComplianceSummaryByResourceTypeHeaders = field(default=None)
    request: shared.GetComplianceSummaryByResourceTypeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetComplianceSummaryByResourceTypeResponse:
    content_type: str = field(default=None)
    get_compliance_summary_by_resource_type_response: Optional[shared.GetComplianceSummaryByResourceTypeResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
