from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddInstanceGroupsXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_ADD_INSTANCE_GROUPS = "ElasticMapReduce.AddInstanceGroups"


@dataclass
class AddInstanceGroupsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddInstanceGroupsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddInstanceGroupsRequest:
    headers: AddInstanceGroupsHeaders = field(default=None)
    request: shared.AddInstanceGroupsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddInstanceGroupsResponse:
    add_instance_groups_output: Optional[shared.AddInstanceGroupsOutput] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
