from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetOrganizationsAccessReportActionEnum(str, Enum):
    GET_ORGANIZATIONS_ACCESS_REPORT = "GetOrganizationsAccessReport"

class GetGetOrganizationsAccessReportSortKeyEnum(str, Enum):
    SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING"
    SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING"
    LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING"
    LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING"

class GetGetOrganizationsAccessReportVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGetOrganizationsAccessReportQueryParams:
    action: GetGetOrganizationsAccessReportActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = field(default=None, metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    sort_key: Optional[GetGetOrganizationsAccessReportSortKeyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortKey', 'style': 'form', 'explode': True }})
    version: GetGetOrganizationsAccessReportVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetOrganizationsAccessReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetOrganizationsAccessReportRequest:
    query_params: GetGetOrganizationsAccessReportQueryParams = field(default=None)
    headers: GetGetOrganizationsAccessReportHeaders = field(default=None)
    

@dataclass
class GetGetOrganizationsAccessReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
