from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAssociateIamInstanceProfileActionEnum(str, Enum):
    ASSOCIATE_IAM_INSTANCE_PROFILE = "AssociateIamInstanceProfile"


@dataclass
class GetAssociateIamInstanceProfileIamInstanceProfile:
    arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Arn' }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Name' }})
    
class GetAssociateIamInstanceProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateIamInstanceProfileQueryParams:
    action: GetAssociateIamInstanceProfileActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    iam_instance_profile: GetAssociateIamInstanceProfileIamInstanceProfile = field(default=None, metadata={'query_param': { 'field_name': 'IamInstanceProfile', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetAssociateIamInstanceProfileVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateIamInstanceProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociateIamInstanceProfileRequest:
    query_params: GetAssociateIamInstanceProfileQueryParams = field(default=None)
    headers: GetAssociateIamInstanceProfileHeaders = field(default=None)
    

@dataclass
class GetAssociateIamInstanceProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
