from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetComposeEnvironmentsActionEnum(str, Enum):
    COMPOSE_ENVIRONMENTS = "ComposeEnvironments"

class GetComposeEnvironmentsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetComposeEnvironmentsQueryParams:
    action: GetComposeEnvironmentsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetComposeEnvironmentsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    application_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ApplicationName', 'style': 'form', 'explode': True }})
    group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GroupName', 'style': 'form', 'explode': True }})
    version_labels: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'VersionLabels', 'style': 'form', 'explode': True }})
    

@dataclass
class GetComposeEnvironmentsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComposeEnvironmentsRequest:
    headers: GetComposeEnvironmentsHeaders = field()
    query_params: GetComposeEnvironmentsQueryParams = field()
    

@dataclass
class GetComposeEnvironmentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
