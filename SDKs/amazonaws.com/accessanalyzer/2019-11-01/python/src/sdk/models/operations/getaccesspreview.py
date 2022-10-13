from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAccessPreviewPathParams:
    access_preview_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPreviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccessPreviewQueryParams:
    analyzer_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'analyzerArn', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccessPreviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAccessPreviewRequest:
    path_params: GetAccessPreviewPathParams = field(default=None)
    query_params: GetAccessPreviewQueryParams = field(default=None)
    headers: GetAccessPreviewHeaders = field(default=None)
    

@dataclass
class GetAccessPreviewResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_access_preview_response: Optional[shared.GetAccessPreviewResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
