from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetPipelineExecutionXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_GET_PIPELINE_EXECUTION = "CodePipeline_20150709.GetPipelineExecution"


@dataclass
class GetPipelineExecutionHeaders:
    x_amz_target: GetPipelineExecutionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineExecutionRequest:
    headers: GetPipelineExecutionHeaders = field()
    request: shared.GetPipelineExecutionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetPipelineExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    get_pipeline_execution_output: Optional[shared.GetPipelineExecutionOutput] = field(default=None)
    pipeline_execution_not_found_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
