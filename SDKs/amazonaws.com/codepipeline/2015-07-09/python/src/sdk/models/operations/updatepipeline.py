from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdatePipelineXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_UPDATE_PIPELINE = "CodePipeline_20150709.UpdatePipeline"


@dataclass
class UpdatePipelineHeaders:
    x_amz_target: UpdatePipelineXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePipelineRequest:
    headers: UpdatePipelineHeaders = field()
    request: shared.UpdatePipelineInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePipelineResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_action_declaration_exception: Optional[Any] = field(default=None)
    invalid_blocker_declaration_exception: Optional[Any] = field(default=None)
    invalid_stage_declaration_exception: Optional[Any] = field(default=None)
    invalid_structure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    update_pipeline_output: Optional[shared.UpdatePipelineOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
