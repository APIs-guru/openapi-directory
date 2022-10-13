from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGenerateOrganizationsAccessReportActionEnum(str, Enum):
    GENERATE_ORGANIZATIONS_ACCESS_REPORT = "GenerateOrganizationsAccessReport"

class GetGenerateOrganizationsAccessReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGenerateOrganizationsAccessReportQueryParams:
    action: GetGenerateOrganizationsAccessReportActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    entity_path: str = field(default=None, metadata={'query_param': { 'field_name': 'EntityPath', 'style': 'form', 'explode': True }})
    organizations_policy_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OrganizationsPolicyId', 'style': 'form', 'explode': True }})
    version: GetGenerateOrganizationsAccessReportVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGenerateOrganizationsAccessReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGenerateOrganizationsAccessReportRequest:
    query_params: GetGenerateOrganizationsAccessReportQueryParams = field(default=None)
    headers: GetGenerateOrganizationsAccessReportHeaders = field(default=None)
    

@dataclass
class GetGenerateOrganizationsAccessReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
