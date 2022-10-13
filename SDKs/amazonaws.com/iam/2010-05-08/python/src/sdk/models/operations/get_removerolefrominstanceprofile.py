from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRemoveRoleFromInstanceProfileActionEnum(str, Enum):
    REMOVE_ROLE_FROM_INSTANCE_PROFILE = "RemoveRoleFromInstanceProfile"

class GetRemoveRoleFromInstanceProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetRemoveRoleFromInstanceProfileQueryParams:
    action: GetRemoveRoleFromInstanceProfileActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_profile_name: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceProfileName', 'style': 'form', 'explode': True }})
    role_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RoleName', 'style': 'form', 'explode': True }})
    version: GetRemoveRoleFromInstanceProfileVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoveRoleFromInstanceProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRemoveRoleFromInstanceProfileRequest:
    query_params: GetRemoveRoleFromInstanceProfileQueryParams = field(default=None)
    headers: GetRemoveRoleFromInstanceProfileHeaders = field(default=None)
    

@dataclass
class GetRemoveRoleFromInstanceProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
