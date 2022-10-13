from dataclasses import dataclass, field
from typing import Enum,Optional

class GetReplaceIamInstanceProfileAssociationActionEnum(str, Enum):
    REPLACE_IAM_INSTANCE_PROFILE_ASSOCIATION = "ReplaceIamInstanceProfileAssociation"


@dataclass
class GetReplaceIamInstanceProfileAssociationIamInstanceProfile:
    arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Arn' }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Name' }})
    
class GetReplaceIamInstanceProfileAssociationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetReplaceIamInstanceProfileAssociationQueryParams:
    action: GetReplaceIamInstanceProfileAssociationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    association_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AssociationId', 'style': 'form', 'explode': True }})
    iam_instance_profile: GetReplaceIamInstanceProfileAssociationIamInstanceProfile = field(default=None, metadata={'query_param': { 'field_name': 'IamInstanceProfile', 'style': 'form', 'explode': True }})
    version: GetReplaceIamInstanceProfileAssociationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReplaceIamInstanceProfileAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetReplaceIamInstanceProfileAssociationRequest:
    query_params: GetReplaceIamInstanceProfileAssociationQueryParams = field(default=None)
    headers: GetReplaceIamInstanceProfileAssociationHeaders = field(default=None)
    

@dataclass
class GetReplaceIamInstanceProfileAssociationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
