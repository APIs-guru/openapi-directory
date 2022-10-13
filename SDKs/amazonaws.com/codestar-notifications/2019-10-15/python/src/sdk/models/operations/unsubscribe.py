from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UnsubscribeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UnsubscribeRequestBody:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    target_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAddress' }})
    

@dataclass
class UnsubscribeRequest:
    headers: UnsubscribeHeaders = field(default=None)
    request: UnsubscribeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnsubscribeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unsubscribe_result: Optional[shared.UnsubscribeResult] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
