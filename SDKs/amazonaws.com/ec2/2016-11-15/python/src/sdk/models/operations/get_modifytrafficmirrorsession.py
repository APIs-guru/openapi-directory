from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetModifyTrafficMirrorSessionActionEnum(str, Enum):
    MODIFY_TRAFFIC_MIRROR_SESSION = "ModifyTrafficMirrorSession"

class GetModifyTrafficMirrorSessionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTrafficMirrorSessionQueryParams:
    action: GetModifyTrafficMirrorSessionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    traffic_mirror_session_id: str = field(metadata={'query_param': { 'field_name': 'TrafficMirrorSessionId', 'style': 'form', 'explode': True }})
    version: GetModifyTrafficMirrorSessionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    packet_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PacketLength', 'style': 'form', 'explode': True }})
    remove_field: Optional[List[shared.TrafficMirrorSessionFieldEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveField', 'style': 'form', 'explode': True }})
    session_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'SessionNumber', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorFilterId', 'style': 'form', 'explode': True }})
    traffic_mirror_target_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorTargetId', 'style': 'form', 'explode': True }})
    virtual_network_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'VirtualNetworkId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTrafficMirrorSessionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyTrafficMirrorSessionRequest:
    headers: GetModifyTrafficMirrorSessionHeaders = field()
    query_params: GetModifyTrafficMirrorSessionQueryParams = field()
    

@dataclass
class GetModifyTrafficMirrorSessionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
