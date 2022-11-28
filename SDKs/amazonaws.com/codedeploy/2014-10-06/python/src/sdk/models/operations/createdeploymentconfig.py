from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateDeploymentConfigXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_DEPLOYMENT_CONFIG = "CodeDeploy_20141006.CreateDeploymentConfig"


@dataclass
class CreateDeploymentConfigHeaders:
    x_amz_target: CreateDeploymentConfigXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentConfigRequest:
    headers: CreateDeploymentConfigHeaders = field()
    request: shared.CreateDeploymentConfigInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentConfigResponse:
    content_type: str = field()
    status_code: int = field()
    create_deployment_config_output: Optional[shared.CreateDeploymentConfigOutput] = field(default=None)
    deployment_config_already_exists_exception: Optional[Any] = field(default=None)
    deployment_config_limit_exceeded_exception: Optional[Any] = field(default=None)
    deployment_config_name_required_exception: Optional[Any] = field(default=None)
    invalid_compute_platform_exception: Optional[Any] = field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = field(default=None)
    invalid_minimum_healthy_host_value_exception: Optional[Any] = field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = field(default=None)
    
