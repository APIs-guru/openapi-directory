from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetListPoliciesGrantingServiceAccessActionEnum(str, Enum):
    LIST_POLICIES_GRANTING_SERVICE_ACCESS = "ListPoliciesGrantingServiceAccess"

class GetListPoliciesGrantingServiceAccessVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListPoliciesGrantingServiceAccessQueryParams:
    action: GetListPoliciesGrantingServiceAccessActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    arn: str = field(metadata={'query_param': { 'field_name': 'Arn', 'style': 'form', 'explode': True }})
    service_namespaces: List[str] = field(metadata={'query_param': { 'field_name': 'ServiceNamespaces', 'style': 'form', 'explode': True }})
    version: GetListPoliciesGrantingServiceAccessVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListPoliciesGrantingServiceAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListPoliciesGrantingServiceAccessRequest:
    headers: GetListPoliciesGrantingServiceAccessHeaders = field()
    query_params: GetListPoliciesGrantingServiceAccessQueryParams = field()
    

@dataclass
class GetListPoliciesGrantingServiceAccessResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
