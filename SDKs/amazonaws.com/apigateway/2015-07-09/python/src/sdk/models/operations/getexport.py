from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetExportPathParams:
    export_type: str = field(default=None, metadata={'path_param': { 'field_name': 'export_type', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    stage_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stage_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportQueryParams:
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'parameters', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportHeaders:
    accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetExportRequest:
    path_params: GetExportPathParams = field(default=None)
    query_params: GetExportQueryParams = field(default=None)
    headers: GetExportHeaders = field(default=None)
    

@dataclass
class GetExportResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    export_response: Optional[shared.ExportResponse] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
