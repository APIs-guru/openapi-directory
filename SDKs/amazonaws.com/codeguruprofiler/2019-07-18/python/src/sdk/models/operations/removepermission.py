from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RemovePermissionActionGroupEnum(str, Enum):
    AGENT_PERMISSIONS = "agentPermissions"


@dataclass
class RemovePermissionPathParams:
    action_group: RemovePermissionActionGroupEnum = field(default=None, metadata={'path_param': { 'field_name': 'actionGroup', 'style': 'simple', 'explode': False }})
    profiling_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemovePermissionQueryParams:
    revision_id: str = field(default=None, metadata={'query_param': { 'field_name': 'revisionId', 'style': 'form', 'explode': True }})
    

@dataclass
class RemovePermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemovePermissionRequest:
    path_params: RemovePermissionPathParams = field(default=None)
    query_params: RemovePermissionQueryParams = field(default=None)
    headers: RemovePermissionHeaders = field(default=None)
    

@dataclass
class RemovePermissionResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    remove_permission_response: Optional[shared.RemovePermissionResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
