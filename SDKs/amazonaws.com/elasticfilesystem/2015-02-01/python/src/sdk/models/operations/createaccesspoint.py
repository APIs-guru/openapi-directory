from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateAccessPointRequestBodyPosixUser
    The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
    """
    
    gid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    secondary_gids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryGids') }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    

@dataclass_json
@dataclass
class CreateAccessPointRequestBodyRootDirectory:
    r"""CreateAccessPointRequestBodyRootDirectory
    Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
    """
    
    creation_info: Optional[shared.CreationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationInfo') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    

@dataclass_json
@dataclass
class CreateAccessPointRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    posix_user: Optional[CreateAccessPointRequestBodyPosixUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixUser') }})
    root_directory: Optional[CreateAccessPointRequestBodyRootDirectory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDirectory') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class CreateAccessPointRequest:
    headers: CreateAccessPointHeaders = field()
    request: CreateAccessPointRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccessPointResponse:
    content_type: str = field()
    status_code: int = field()
    access_point_already_exists: Optional[Any] = field(default=None)
    access_point_description: Optional[shared.AccessPointDescription] = field(default=None)
    access_point_limit_exceeded: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
