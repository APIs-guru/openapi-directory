from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetDeploymentXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_GET_DEPLOYMENT = "CodeDeploy_20141006.GetDeployment"


@dataclass
class GetDeploymentHeaders:
    x_amz_target: GetDeploymentXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentRequest:
    headers: GetDeploymentHeaders = field()
    request: shared.GetDeploymentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    deployment_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_id_required_exception: Optional[Any] = field(default=None)
    get_deployment_output: Optional[shared.GetDeploymentOutput] = field(default=None)
    invalid_deployment_id_exception: Optional[Any] = field(default=None)
    
