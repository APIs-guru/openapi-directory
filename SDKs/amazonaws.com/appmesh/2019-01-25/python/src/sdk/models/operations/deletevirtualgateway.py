from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteVirtualGatewayPathParams:
    mesh_name: str = field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    virtual_gateway_name: str = field(metadata={'path_param': { 'field_name': 'virtualGatewayName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVirtualGatewayQueryParams:
    mesh_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteVirtualGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVirtualGatewayRequest:
    headers: DeleteVirtualGatewayHeaders = field()
    path_params: DeleteVirtualGatewayPathParams = field()
    query_params: DeleteVirtualGatewayQueryParams = field()
    

@dataclass
class DeleteVirtualGatewayResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    delete_virtual_gateway_output: Optional[shared.DeleteVirtualGatewayOutput] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
