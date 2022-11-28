from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StopDeploymentXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_STOP_DEPLOYMENT = "CodeDeploy_20141006.StopDeployment"


@dataclass
class StopDeploymentHeaders:
    x_amz_target: StopDeploymentXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopDeploymentRequest:
    headers: StopDeploymentHeaders = field()
    request: shared.StopDeploymentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    deployment_already_completed_exception: Optional[Any] = field(default=None)
    deployment_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    stop_deployment_output: Optional[shared.StopDeploymentOutput] = field(default=None)
    unsupported_action_for_deployment_type_exception: Optional[Any] = field(default=None)
    
