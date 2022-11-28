from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetListEntitiesForPolicyActionEnum(str, Enum):
    LIST_ENTITIES_FOR_POLICY = "ListEntitiesForPolicy"

class GetListEntitiesForPolicyEntityFilterEnum(str, Enum):
    USER = "User"
    ROLE = "Role"
    GROUP = "Group"
    LOCAL_MANAGED_POLICY = "LocalManagedPolicy"
    AWS_MANAGED_POLICY = "AWSManagedPolicy"

class GetListEntitiesForPolicyPolicyUsageFilterEnum(str, Enum):
    PERMISSIONS_POLICY = "PermissionsPolicy"
    PERMISSIONS_BOUNDARY = "PermissionsBoundary"

class GetListEntitiesForPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListEntitiesForPolicyQueryParams:
    action: GetListEntitiesForPolicyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_arn: str = field(metadata={'query_param': { 'field_name': 'PolicyArn', 'style': 'form', 'explode': True }})
    version: GetListEntitiesForPolicyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    entity_filter: Optional[GetListEntitiesForPolicyEntityFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'EntityFilter', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    path_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PathPrefix', 'style': 'form', 'explode': True }})
    policy_usage_filter: Optional[GetListEntitiesForPolicyPolicyUsageFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyUsageFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListEntitiesForPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListEntitiesForPolicyRequest:
    headers: GetListEntitiesForPolicyHeaders = field()
    query_params: GetListEntitiesForPolicyQueryParams = field()
    

@dataclass
class GetListEntitiesForPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
