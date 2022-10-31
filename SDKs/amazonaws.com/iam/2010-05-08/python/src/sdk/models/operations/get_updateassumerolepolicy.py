from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateAssumeRolePolicyActionEnum(str, Enum):
    UPDATE_ASSUME_ROLE_POLICY = "UpdateAssumeRolePolicy"

class GetUpdateAssumeRolePolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateAssumeRolePolicyQueryParams:
    action: GetUpdateAssumeRolePolicyActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_document: str = field(default=None, metadata={'query_param': { 'field_name': 'PolicyDocument', 'style': 'form', 'explode': True }})
    role_name: str = field(default=None, metadata={'query_param': { 'field_name': 'RoleName', 'style': 'form', 'explode': True }})
    version: GetUpdateAssumeRolePolicyVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateAssumeRolePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateAssumeRolePolicyRequest:
    query_params: GetUpdateAssumeRolePolicyQueryParams = field(default=None)
    headers: GetUpdateAssumeRolePolicyHeaders = field(default=None)
    

@dataclass
class GetUpdateAssumeRolePolicyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
