from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListClientDevicesAssociatedWithCoreDevicePathParams:
    core_device_thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'coreDeviceThingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListClientDevicesAssociatedWithCoreDeviceQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListClientDevicesAssociatedWithCoreDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListClientDevicesAssociatedWithCoreDeviceRequest:
    path_params: ListClientDevicesAssociatedWithCoreDevicePathParams = field(default=None)
    query_params: ListClientDevicesAssociatedWithCoreDeviceQueryParams = field(default=None)
    headers: ListClientDevicesAssociatedWithCoreDeviceHeaders = field(default=None)
    

@dataclass
class ListClientDevicesAssociatedWithCoreDeviceResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_client_devices_associated_with_core_device_response: Optional[shared.ListClientDevicesAssociatedWithCoreDeviceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
