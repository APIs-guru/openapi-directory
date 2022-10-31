from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAddRoleToInstanceProfileActionEnum(str, Enum):
    ADD_ROLE_TO_INSTANCE_PROFILE = "AddRoleToInstanceProfile"

class GetAddRoleToInstanceProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetAddRoleToInstanceProfileQueryParams:
    action: GetAddRoleToInstanceProfileActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_profile_name: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceProfileName', 'style': 'form', 'explode': True }})
    role_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RoleName', 'style': 'form', 'explode': True }})
    version: GetAddRoleToInstanceProfileVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAddRoleToInstanceProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddRoleToInstanceProfileRequest:
    query_params: GetAddRoleToInstanceProfileQueryParams = field(default=None)
    headers: GetAddRoleToInstanceProfileHeaders = field(default=None)
    

@dataclass
class GetAddRoleToInstanceProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
