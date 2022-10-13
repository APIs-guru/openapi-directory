from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBulkDeploymentStatusPathParams:
    bulk_deployment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'BulkDeploymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBulkDeploymentStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetBulkDeploymentStatusRequest:
    path_params: GetBulkDeploymentStatusPathParams = field(default=None)
    headers: GetBulkDeploymentStatusHeaders = field(default=None)
    

@dataclass
class GetBulkDeploymentStatusResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_bulk_deployment_status_response: Optional[shared.GetBulkDeploymentStatusResponse] = field(default=None)
    status_code: int = field(default=None)
    
