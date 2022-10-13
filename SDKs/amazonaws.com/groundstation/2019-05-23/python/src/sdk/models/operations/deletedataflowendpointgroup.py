from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteDataflowEndpointGroupPathParams:
    dataflow_endpoint_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dataflowEndpointGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDataflowEndpointGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteDataflowEndpointGroupRequest:
    path_params: DeleteDataflowEndpointGroupPathParams = field(default=None)
    headers: DeleteDataflowEndpointGroupHeaders = field(default=None)
    

@dataclass
class DeleteDataflowEndpointGroupResponse:
    content_type: str = field(default=None)
    dataflow_endpoint_group_id_response: Optional[shared.DataflowEndpointGroupIDResponse] = field(default=None)
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
