from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteCacheParameterGroupActionEnum(str, Enum):
    DELETE_CACHE_PARAMETER_GROUP = "DeleteCacheParameterGroup"

class GetDeleteCacheParameterGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDeleteCacheParameterGroupQueryParams:
    action: GetDeleteCacheParameterGroupActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cache_parameter_group_name: str = field(metadata={'query_param': { 'field_name': 'CacheParameterGroupName', 'style': 'form', 'explode': True }})
    version: GetDeleteCacheParameterGroupVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteCacheParameterGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteCacheParameterGroupRequest:
    headers: GetDeleteCacheParameterGroupHeaders = field()
    query_params: GetDeleteCacheParameterGroupQueryParams = field()
    

@dataclass
class GetDeleteCacheParameterGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
