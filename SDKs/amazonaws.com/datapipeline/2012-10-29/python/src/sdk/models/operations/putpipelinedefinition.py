from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutPipelineDefinitionXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_PUT_PIPELINE_DEFINITION = "DataPipeline.PutPipelineDefinition"


@dataclass
class PutPipelineDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutPipelineDefinitionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPipelineDefinitionRequest:
    headers: PutPipelineDefinitionHeaders = field(default=None)
    request: shared.PutPipelineDefinitionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPipelineDefinitionResponse:
    content_type: str = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    pipeline_deleted_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    put_pipeline_definition_output: Optional[shared.PutPipelineDefinitionOutput] = field(default=None)
    status_code: int = field(default=None)
    
