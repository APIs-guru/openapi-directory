from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetAssociateEnvironmentOperationsRoleActionEnum(str, Enum):
    ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE = "AssociateEnvironmentOperationsRole"

class GetAssociateEnvironmentOperationsRoleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetAssociateEnvironmentOperationsRoleQueryParams:
    action: GetAssociateEnvironmentOperationsRoleActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    environment_name: str = field(metadata={'query_param': { 'field_name': 'EnvironmentName', 'style': 'form', 'explode': True }})
    operations_role: str = field(metadata={'query_param': { 'field_name': 'OperationsRole', 'style': 'form', 'explode': True }})
    version: GetAssociateEnvironmentOperationsRoleVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateEnvironmentOperationsRoleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociateEnvironmentOperationsRoleRequest:
    headers: GetAssociateEnvironmentOperationsRoleHeaders = field()
    query_params: GetAssociateEnvironmentOperationsRoleQueryParams = field()
    

@dataclass
class GetAssociateEnvironmentOperationsRoleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
