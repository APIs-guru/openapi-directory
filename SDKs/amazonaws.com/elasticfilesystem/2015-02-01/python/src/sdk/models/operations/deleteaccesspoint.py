from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAccessPointPathParams:
    access_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'AccessPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAccessPointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteAccessPointRequest:
    path_params: DeleteAccessPointPathParams = field(default=None)
    headers: DeleteAccessPointHeaders = field(default=None)
    

@dataclass
class DeleteAccessPointResponse:
    access_point_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
