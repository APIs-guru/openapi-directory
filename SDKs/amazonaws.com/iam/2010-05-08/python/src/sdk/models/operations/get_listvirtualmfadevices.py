from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class GetListVirtualMfaDevicesActionEnum(str, Enum):
    LIST_VIRTUAL_MFA_DEVICES = "ListVirtualMFADevices"

class GetListVirtualMfaDevicesAssignmentStatusEnum(str, Enum):
    ASSIGNED = "Assigned"
    UNASSIGNED = "Unassigned"
    ANY = "Any"

class GetListVirtualMfaDevicesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListVirtualMfaDevicesQueryParams:
    action: GetListVirtualMfaDevicesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetListVirtualMfaDevicesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    assignment_status: Optional[GetListVirtualMfaDevicesAssignmentStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'AssignmentStatus', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListVirtualMfaDevicesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListVirtualMfaDevicesRequest:
    headers: GetListVirtualMfaDevicesHeaders = field()
    query_params: GetListVirtualMfaDevicesQueryParams = field()
    

@dataclass
class GetListVirtualMfaDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
