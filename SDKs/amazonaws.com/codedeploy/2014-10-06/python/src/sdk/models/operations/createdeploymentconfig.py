from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDeploymentConfigXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_DEPLOYMENT_CONFIG = "CodeDeploy_20141006.CreateDeploymentConfig"


@dataclass
class CreateDeploymentConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDeploymentConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDeploymentConfigRequest:
    headers: CreateDeploymentConfigHeaders = field(default=None)
    request: shared.CreateDeploymentConfigInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentConfigResponse:
    content_type: str = field(default=None)
    create_deployment_config_output: Optional[shared.CreateDeploymentConfigOutput] = field(default=None)
    deployment_config_already_exists_exception: Optional[Any] = field(default=None)
    deployment_config_limit_exceeded_exception: Optional[Any] = field(default=None)
    deployment_config_name_required_exception: Optional[Any] = field(default=None)
    invalid_compute_platform_exception: Optional[Any] = field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = field(default=None)
    invalid_minimum_healthy_host_value_exception: Optional[Any] = field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
