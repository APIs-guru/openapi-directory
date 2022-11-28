from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class DeleteV2LoggingLevelTargetTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    THING_GROUP = "THING_GROUP"


@dataclass
class DeleteV2LoggingLevelQueryParams:
    target_name: str = field(metadata={'query_param': { 'field_name': 'targetName', 'style': 'form', 'explode': True }})
    target_type: DeleteV2LoggingLevelTargetTypeEnum = field(metadata={'query_param': { 'field_name': 'targetType', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteV2LoggingLevelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV2LoggingLevelRequest:
    headers: DeleteV2LoggingLevelHeaders = field()
    query_params: DeleteV2LoggingLevelQueryParams = field()
    

@dataclass
class DeleteV2LoggingLevelResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
