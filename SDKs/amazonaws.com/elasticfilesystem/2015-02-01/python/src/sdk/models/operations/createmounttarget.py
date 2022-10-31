from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateMountTargetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateMountTargetRequestBody:
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    subnet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    

@dataclass
class CreateMountTargetRequest:
    headers: CreateMountTargetHeaders = field(default=None)
    request: CreateMountTargetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMountTargetResponse:
    availability_zones_mismatch: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    ip_address_in_use: Optional[Any] = field(default=None)
    mount_target_conflict: Optional[Any] = field(default=None)
    mount_target_description: Optional[shared.MountTargetDescription] = field(default=None)
    network_interface_limit_exceeded: Optional[Any] = field(default=None)
    no_free_addresses_in_subnet: Optional[Any] = field(default=None)
    security_group_limit_exceeded: Optional[Any] = field(default=None)
    security_group_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subnet_not_found: Optional[Any] = field(default=None)
    unsupported_availability_zone: Optional[Any] = field(default=None)
    
