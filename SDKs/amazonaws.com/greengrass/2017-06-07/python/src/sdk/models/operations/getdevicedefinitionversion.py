from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDeviceDefinitionVersionPathParams:
    device_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DeviceDefinitionId', 'style': 'simple', 'explode': False }})
    device_definition_version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DeviceDefinitionVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceDefinitionVersionQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceDefinitionVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeviceDefinitionVersionRequest:
    path_params: GetDeviceDefinitionVersionPathParams = field(default=None)
    query_params: GetDeviceDefinitionVersionQueryParams = field(default=None)
    headers: GetDeviceDefinitionVersionHeaders = field(default=None)
    

@dataclass
class GetDeviceDefinitionVersionResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_device_definition_version_response: Optional[shared.GetDeviceDefinitionVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
