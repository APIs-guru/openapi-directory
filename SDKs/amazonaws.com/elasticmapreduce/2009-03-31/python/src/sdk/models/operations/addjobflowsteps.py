from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AddJobFlowStepsXAmzTargetEnum(str, Enum):
    ELASTIC_MAP_REDUCE_ADD_JOB_FLOW_STEPS = "ElasticMapReduce.AddJobFlowSteps"


@dataclass
class AddJobFlowStepsHeaders:
    x_amz_target: AddJobFlowStepsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddJobFlowStepsRequest:
    headers: AddJobFlowStepsHeaders = field()
    request: shared.AddJobFlowStepsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddJobFlowStepsResponse:
    content_type: str = field()
    status_code: int = field()
    add_job_flow_steps_output: Optional[shared.AddJobFlowStepsOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
