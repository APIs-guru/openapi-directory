from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetConformancePackComplianceDetailsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetConformancePackComplianceDetailsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_CONFORMANCE_PACK_COMPLIANCE_DETAILS = "StarlingDoveService.GetConformancePackComplianceDetails"


@dataclass
class GetConformancePackComplianceDetailsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetConformancePackComplianceDetailsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetConformancePackComplianceDetailsRequest:
    query_params: GetConformancePackComplianceDetailsQueryParams = field(default=None)
    headers: GetConformancePackComplianceDetailsHeaders = field(default=None)
    request: shared.GetConformancePackComplianceDetailsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetConformancePackComplianceDetailsResponse:
    content_type: str = field(default=None)
    get_conformance_pack_compliance_details_response: Optional[shared.GetConformancePackComplianceDetailsResponse] = field(default=None)
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    no_such_config_rule_in_conformance_pack_exception: Optional[Any] = field(default=None)
    no_such_conformance_pack_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
