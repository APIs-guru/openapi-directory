from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateDeploymentGroupXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_UPDATE_DEPLOYMENT_GROUP = "CodeDeploy_20141006.UpdateDeploymentGroup"


@dataclass
class UpdateDeploymentGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateDeploymentGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateDeploymentGroupRequest:
    headers: UpdateDeploymentGroupHeaders = field(default=None)
    request: shared.UpdateDeploymentGroupInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeploymentGroupResponse:
    alarms_limit_exceeded_exception: Optional[Any] = field(default=None)
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_already_exists_exception: Optional[Any] = field(default=None)
    deployment_group_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_name_required_exception: Optional[Any] = field(default=None)
    ecs_service_mapping_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_alarm_config_exception: Optional[Any] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_auto_rollback_config_exception: Optional[Any] = field(default=None)
    invalid_auto_scaling_group_exception: Optional[Any] = field(default=None)
    invalid_blue_green_deployment_configuration_exception: Optional[Any] = field(default=None)
    invalid_deployment_config_name_exception: Optional[Any] = field(default=None)
    invalid_deployment_group_name_exception: Optional[Any] = field(default=None)
    invalid_deployment_style_exception: Optional[Any] = field(default=None)
    invalid_ec2_tag_combination_exception: Optional[Any] = field(default=None)
    invalid_ec2_tag_exception: Optional[Any] = field(default=None)
    invalid_ecs_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    invalid_load_balancer_info_exception: Optional[Any] = field(default=None)
    invalid_on_premises_tag_combination_exception: Optional[Any] = field(default=None)
    invalid_role_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    invalid_target_group_pair_exception: Optional[Any] = field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = field(default=None)
    invalid_trigger_config_exception: Optional[Any] = field(default=None)
    lifecycle_hook_limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_set_list_limit_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    trigger_targets_limit_exceeded_exception: Optional[Any] = field(default=None)
    update_deployment_group_output: Optional[shared.UpdateDeploymentGroupOutput] = field(default=None)
    
