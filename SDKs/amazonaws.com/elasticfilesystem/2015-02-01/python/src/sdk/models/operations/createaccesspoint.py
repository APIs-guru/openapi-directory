from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateAccessPointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAccessPointRequestBodyPosixUser:
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gid' }})
    secondary_gids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryGids' }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Uid' }})
    

@dataclass_json
@dataclass
class CreateAccessPointRequestBodyRootDirectory:
    creation_info: Optional[shared.CreationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationInfo' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    

@dataclass_json
@dataclass
class CreateAccessPointRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    file_system_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemId' }})
    posix_user: Optional[CreateAccessPointRequestBodyPosixUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PosixUser' }})
    root_directory: Optional[CreateAccessPointRequestBodyRootDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootDirectory' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    

@dataclass
class CreateAccessPointRequest:
    headers: CreateAccessPointHeaders = field(default=None)
    request: CreateAccessPointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccessPointResponse:
    access_point_already_exists: Optional[Any] = field(default=None)
    access_point_description: Optional[shared.AccessPointDescription] = field(default=None)
    access_point_limit_exceeded: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
