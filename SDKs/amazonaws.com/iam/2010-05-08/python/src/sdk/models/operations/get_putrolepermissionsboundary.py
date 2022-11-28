from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPutRolePermissionsBoundaryActionEnum(str, Enum):
    PUT_ROLE_PERMISSIONS_BOUNDARY = "PutRolePermissionsBoundary"

class GetPutRolePermissionsBoundaryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetPutRolePermissionsBoundaryQueryParams:
    action: GetPutRolePermissionsBoundaryActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    permissions_boundary: str = field(metadata={'query_param': { 'field_name': 'PermissionsBoundary', 'style': 'form', 'explode': True }})
    role_name: str = field(metadata={'query_param': { 'field_name': 'RoleName', 'style': 'form', 'explode': True }})
    version: GetPutRolePermissionsBoundaryVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutRolePermissionsBoundaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutRolePermissionsBoundaryRequest:
    headers: GetPutRolePermissionsBoundaryHeaders = field()
    query_params: GetPutRolePermissionsBoundaryQueryParams = field()
    

@dataclass
class GetPutRolePermissionsBoundaryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
