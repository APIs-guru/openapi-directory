from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeManagedEndpointPathParams:
    endpoint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'endpointId', 'style': 'simple', 'explode': False }})
    virtual_cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualClusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeManagedEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeManagedEndpointRequest:
    path_params: DescribeManagedEndpointPathParams = field(default=None)
    headers: DescribeManagedEndpointHeaders = field(default=None)
    

@dataclass
class DescribeManagedEndpointResponse:
    content_type: str = field(default=None)
    describe_managed_endpoint_response: Optional[shared.DescribeManagedEndpointResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
