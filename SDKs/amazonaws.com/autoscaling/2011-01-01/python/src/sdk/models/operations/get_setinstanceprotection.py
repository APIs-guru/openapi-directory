from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetSetInstanceProtectionActionEnum(str, Enum):
    SET_INSTANCE_PROTECTION = "SetInstanceProtection"

class GetSetInstanceProtectionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetSetInstanceProtectionQueryParams:
    action: GetSetInstanceProtectionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    instance_ids: List[str] = field(metadata={'query_param': { 'field_name': 'InstanceIds', 'style': 'form', 'explode': True }})
    protected_from_scale_in: bool = field(metadata={'query_param': { 'field_name': 'ProtectedFromScaleIn', 'style': 'form', 'explode': True }})
    version: GetSetInstanceProtectionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetInstanceProtectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetInstanceProtectionRequest:
    headers: GetSetInstanceProtectionHeaders = field()
    query_params: GetSetInstanceProtectionQueryParams = field()
    

@dataclass
class GetSetInstanceProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
