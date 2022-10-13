from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeUpdatePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    update_id: str = field(default=None, metadata={'path_param': { 'field_name': 'updateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeUpdateQueryParams:
    addon_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addonName', 'style': 'form', 'explode': True }})
    nodegroup_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nodegroupName', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeUpdateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DescribeUpdateRequest:
    path_params: DescribeUpdatePathParams = field(default=None)
    query_params: DescribeUpdateQueryParams = field(default=None)
    headers: DescribeUpdateHeaders = field(default=None)
    

@dataclass
class DescribeUpdateResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_update_response: Optional[shared.DescribeUpdateResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
