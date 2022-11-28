from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateEntityRecognizerXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_CREATE_ENTITY_RECOGNIZER = "Comprehend_20171127.CreateEntityRecognizer"


@dataclass
class CreateEntityRecognizerHeaders:
    x_amz_target: CreateEntityRecognizerXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEntityRecognizerRequest:
    headers: CreateEntityRecognizerHeaders = field()
    request: shared.CreateEntityRecognizerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEntityRecognizerResponse:
    content_type: str = field()
    status_code: int = field()
    create_entity_recognizer_response: Optional[shared.CreateEntityRecognizerResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    kms_key_validation_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    unsupported_language_exception: Optional[Any] = field(default=None)
    
