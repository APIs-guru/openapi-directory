from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateExclusionsPreviewXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_CREATE_EXCLUSIONS_PREVIEW = "InspectorService.CreateExclusionsPreview"


@dataclass
class CreateExclusionsPreviewHeaders:
    x_amz_target: CreateExclusionsPreviewXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateExclusionsPreviewRequest:
    headers: CreateExclusionsPreviewHeaders = field()
    request: shared.CreateExclusionsPreviewRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateExclusionsPreviewResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    create_exclusions_preview_response: Optional[shared.CreateExclusionsPreviewResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    no_such_entity_exception: Optional[Any] = field(default=None)
    preview_generation_in_progress_exception: Optional[Any] = field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = field(default=None)
    
