from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeletePipelineXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_DELETE_PIPELINE = "CodePipeline_20150709.DeletePipeline"


@dataclass
class DeletePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeletePipelineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePipelineRequest:
    headers: DeletePipelineHeaders = field(default=None)
    request: shared.DeletePipelineInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeletePipelineResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
