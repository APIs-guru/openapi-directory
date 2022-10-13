from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SubscribeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SubscribeRequestBodyTarget:
    target_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetAddress' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    

@dataclass_json
@dataclass
class SubscribeRequestBody:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    target: SubscribeRequestBodyTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    

@dataclass
class SubscribeRequest:
    headers: SubscribeHeaders = field(default=None)
    request: SubscribeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscribeResponse:
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    subscribe_result: Optional[shared.SubscribeResult] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
