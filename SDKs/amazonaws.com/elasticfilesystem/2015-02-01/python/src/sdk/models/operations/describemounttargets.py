from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeMountTargetsQueryParams:
    access_point_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccessPointId', 'style': 'form', 'explode': True }})
    file_system_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FileSystemId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    mount_target_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MountTargetId', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeMountTargetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DescribeMountTargetsRequest:
    query_params: DescribeMountTargetsQueryParams = field(default=None)
    headers: DescribeMountTargetsHeaders = field(default=None)
    

@dataclass
class DescribeMountTargetsResponse:
    access_point_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_mount_targets_response: Optional[shared.DescribeMountTargetsResponse] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    mount_target_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
