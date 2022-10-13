from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class DeleteV2LoggingLevelTargetTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    THING_GROUP = "THING_GROUP"


@dataclass
class DeleteV2LoggingLevelQueryParams:
    target_name: str = field(default=None, metadata={'query_param': { 'field_name': 'targetName', 'style': 'form', 'explode': True }})
    target_type: DeleteV2LoggingLevelTargetTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'targetType', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteV2LoggingLevelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteV2LoggingLevelRequest:
    query_params: DeleteV2LoggingLevelQueryParams = field(default=None)
    headers: DeleteV2LoggingLevelHeaders = field(default=None)
    

@dataclass
class DeleteV2LoggingLevelResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
