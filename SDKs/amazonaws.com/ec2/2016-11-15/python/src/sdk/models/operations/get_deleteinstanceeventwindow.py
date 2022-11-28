from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteInstanceEventWindowActionEnum(str, Enum):
    DELETE_INSTANCE_EVENT_WINDOW = "DeleteInstanceEventWindow"

class GetDeleteInstanceEventWindowVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteInstanceEventWindowQueryParams:
    action: GetDeleteInstanceEventWindowActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_event_window_id: str = field(metadata={'query_param': { 'field_name': 'InstanceEventWindowId', 'style': 'form', 'explode': True }})
    version: GetDeleteInstanceEventWindowVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    force_delete: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ForceDelete', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteInstanceEventWindowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteInstanceEventWindowRequest:
    headers: GetDeleteInstanceEventWindowHeaders = field()
    query_params: GetDeleteInstanceEventWindowQueryParams = field()
    

@dataclass
class GetDeleteInstanceEventWindowResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
