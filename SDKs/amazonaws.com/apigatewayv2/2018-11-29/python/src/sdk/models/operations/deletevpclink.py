from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteVpcLinkPathParams:
    vpc_link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vpcLinkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVpcLinkHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteVpcLinkRequest:
    path_params: DeleteVpcLinkPathParams = field(default=None)
    headers: DeleteVpcLinkHeaders = field(default=None)
    

@dataclass
class DeleteVpcLinkResponse:
    content_type: str = field(default=None)
    delete_vpc_link_response: Optional[dict[str, Any]] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
