from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListBulkDeploymentDetailedReportsPathParams:
    bulk_deployment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'BulkDeploymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBulkDeploymentDetailedReportsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBulkDeploymentDetailedReportsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListBulkDeploymentDetailedReportsRequest:
    path_params: ListBulkDeploymentDetailedReportsPathParams = field(default=None)
    query_params: ListBulkDeploymentDetailedReportsQueryParams = field(default=None)
    headers: ListBulkDeploymentDetailedReportsHeaders = field(default=None)
    

@dataclass
class ListBulkDeploymentDetailedReportsResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    list_bulk_deployment_detailed_reports_response: Optional[shared.ListBulkDeploymentDetailedReportsResponse] = field(default=None)
    status_code: int = field(default=None)
    
