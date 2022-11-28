from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyCacheSubnetGroupActionEnum(str, Enum):
    MODIFY_CACHE_SUBNET_GROUP = "ModifyCacheSubnetGroup"

class GetModifyCacheSubnetGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyCacheSubnetGroupQueryParams:
    action: GetModifyCacheSubnetGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_subnet_group_name: str = field(metadata={'query_param': { 'field_name': 'CacheSubnetGroupName', 'style': 'form', 'explode': True }})
    version: GetModifyCacheSubnetGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_subnet_group_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CacheSubnetGroupDescription', 'style': 'form', 'explode': True }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SubnetIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyCacheSubnetGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyCacheSubnetGroupRequest:
    headers: GetModifyCacheSubnetGroupHeaders = field()
    query_params: GetModifyCacheSubnetGroupQueryParams = field()
    

@dataclass
class GetModifyCacheSubnetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
