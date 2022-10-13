from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ExportAPIPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    specification: str = field(default=None, metadata={'path_param': { 'field_name': 'specification', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportAPIQueryParams:
    export_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exportVersion', 'style': 'form', 'explode': True }})
    include_extensions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeExtensions', 'style': 'form', 'explode': True }})
    output_type: str = field(default=None, metadata={'query_param': { 'field_name': 'outputType', 'style': 'form', 'explode': True }})
    stage_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stageName', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ExportAPIRequest:
    path_params: ExportAPIPathParams = field(default=None)
    query_params: ExportAPIQueryParams = field(default=None)
    headers: ExportAPIHeaders = field(default=None)
    

@dataclass
class ExportAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    export_api_response: Optional[shared.ExportAPIResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
