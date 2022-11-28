from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetOfferingStatusQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetOfferingStatusXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_GET_OFFERING_STATUS = "DeviceFarm_20150623.GetOfferingStatus"


@dataclass
class GetOfferingStatusHeaders:
    x_amz_target: GetOfferingStatusXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingStatusRequest:
    headers: GetOfferingStatusHeaders = field()
    query_params: GetOfferingStatusQueryParams = field()
    request: shared.GetOfferingStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOfferingStatusResponse:
    content_type: str = field()
    status_code: int = field()
    argument_exception: Optional[Any] = field(default=None)
    get_offering_status_result: Optional[shared.GetOfferingStatusResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_eligible_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    
