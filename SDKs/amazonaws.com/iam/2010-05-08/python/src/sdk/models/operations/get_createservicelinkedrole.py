from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateServiceLinkedRoleActionEnum(str, Enum):
    CREATE_SERVICE_LINKED_ROLE = "CreateServiceLinkedRole"

class GetCreateServiceLinkedRoleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetCreateServiceLinkedRoleQueryParams:
    aws_service_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AWSServiceName', 'style': 'form', 'explode': True }})
    action: GetCreateServiceLinkedRoleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    custom_suffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomSuffix', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    version: GetCreateServiceLinkedRoleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateServiceLinkedRoleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateServiceLinkedRoleRequest:
    query_params: GetCreateServiceLinkedRoleQueryParams = field(default=None)
    headers: GetCreateServiceLinkedRoleHeaders = field(default=None)
    

@dataclass
class GetCreateServiceLinkedRoleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
