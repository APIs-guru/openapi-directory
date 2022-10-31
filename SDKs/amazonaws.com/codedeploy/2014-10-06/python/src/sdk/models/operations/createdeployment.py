from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDeploymentXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_DEPLOYMENT = "CodeDeploy_20141006.CreateDeployment"


@dataclass
class CreateDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateDeploymentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentRequest:
    headers: CreateDeploymentHeaders = field(default=None)
    request: shared.CreateDeploymentInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentResponse:
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_deployment_output: Optional[shared.CreateDeploymentOutput] = field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_name_required_exception: Optional[Any] = field(default=None)
    deployment_limit_exceeded_exception: Optional[Any] = field(default=None)
    description_too_long_exception: Optional[Any] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_auto_rollback_config_exception: Optional[Any] = field(default=None)
    invalid_auto_scaling_group_exception: Optional[Any] = field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = field(default=None)
    invalid_file_exists_behavior_exception: Optional[Any] = field(default=None)
    invalid_git_hub_account_token_exception: Optional[Any] = field(default=None)
    invalid_ignore_application_stop_failures_value_exception: Optional[Any] = field(default=None)
    invalid_load_balancer_info_exception: Optional[Any] = field(default=None)
    invalid_revision_exception: Optional[Any] = field(default=None)
    invalid_role_exception: Optional[Any] = field(default=None)
    invalid_target_instances_exception: Optional[Any] = field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = field(default=None)
    invalid_update_outdated_instances_only_value_exception: Optional[Any] = field(default=None)
    revision_does_not_exist_exception: Optional[Any] = field(default=None)
    revision_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
