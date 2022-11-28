from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteDeploymentConfigXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_DELETE_DEPLOYMENT_CONFIG = "CodeDeploy_20141006.DeleteDeploymentConfig"


@dataclass
class DeleteDeploymentConfigHeaders:
    x_amz_target: DeleteDeploymentConfigXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeploymentConfigRequest:
    headers: DeleteDeploymentConfigHeaders = field()
    request: shared.DeleteDeploymentConfigInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteDeploymentConfigResponse:
    content_type: str = field()
    status_code: int = field()
    deployment_config_in_use_exception: Optional[Any] = field(default=None)
    deployment_config_name_required_exception: Optional[Any] = field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    
