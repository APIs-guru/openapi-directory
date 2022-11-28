from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAssociateIamInstanceProfileActionEnum(str, Enum):
    ASSOCIATE_IAM_INSTANCE_PROFILE = "AssociateIamInstanceProfile"


@dataclass
class GetAssociateIamInstanceProfileIamInstanceProfile:
    r"""GetAssociateIamInstanceProfileIamInstanceProfile
    Describes an IAM instance profile.
    """
    
    arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Arn' }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Name' }})
    
class GetAssociateIamInstanceProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateIamInstanceProfileQueryParams:
    action: GetAssociateIamInstanceProfileActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    iam_instance_profile: GetAssociateIamInstanceProfileIamInstanceProfile = field(metadata={'query_param': { 'field_name': 'IamInstanceProfile', 'style': 'form', 'explode': True }})
    instance_id: str = field(metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetAssociateIamInstanceProfileVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

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
    headers: GetAssociateIamInstanceProfileHeaders = field()
    query_params: GetAssociateIamInstanceProfileQueryParams = field()
    

@dataclass
class GetAssociateIamInstanceProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
