from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetNetworkProfileXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_GET_NETWORK_PROFILE = "DeviceFarm_20150623.GetNetworkProfile"


@dataclass
class GetNetworkProfileHeaders:
    x_amz_target: GetNetworkProfileXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkProfileRequest:
    headers: GetNetworkProfileHeaders = field()
    request: shared.GetNetworkProfileRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetNetworkProfileResponse:
    content_type: str = field()
    status_code: int = field()
    argument_exception: Optional[Any] = field(default=None)
    get_network_profile_result: Optional[shared.GetNetworkProfileResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    
