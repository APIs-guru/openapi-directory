from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateServiceLinkedRoleActionEnum(str, Enum):
    CREATE_SERVICE_LINKED_ROLE = "CreateServiceLinkedRole"

class GetCreateServiceLinkedRoleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetCreateServiceLinkedRoleQueryParams:
    aws_service_name: str = field(metadata={'query_param': { 'field_name': 'AWSServiceName', 'style': 'form', 'explode': True }})
    action: GetCreateServiceLinkedRoleActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetCreateServiceLinkedRoleVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    custom_suffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CustomSuffix', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateServiceLinkedRoleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateServiceLinkedRoleRequest:
    headers: GetCreateServiceLinkedRoleHeaders = field()
    query_params: GetCreateServiceLinkedRoleQueryParams = field()
    

@dataclass
class GetCreateServiceLinkedRoleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
