from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateDeploymentGroupXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_CREATE_DEPLOYMENT_GROUP = "CodeDeploy_20141006.CreateDeploymentGroup"


@dataclass
class CreateDeploymentGroupHeaders:
    x_amz_target: CreateDeploymentGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentGroupRequest:
    headers: CreateDeploymentGroupHeaders = field()
    request: shared.CreateDeploymentGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentGroupResponse:
    content_type: str = field()
    status_code: int = field()
    alarms_limit_exceeded_exception: Optional[Any] = field(default=None)
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    create_deployment_group_output: Optional[shared.CreateDeploymentGroupOutput] = field(default=None)
    deployment_config_does_not_exist_exception: Optional[Any] = field(default=None)
    deployment_group_already_exists_exception: Optional[Any] = field(default=None)
    deployment_group_limit_exceeded_exception: Optional[Any] = field(default=None)
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
    invalid_tags_to_add_exception: Optional[Any] = field(default=None)
    invalid_target_group_pair_exception: Optional[Any] = field(default=None)
    invalid_traffic_routing_configuration_exception: Optional[Any] = field(default=None)
    invalid_trigger_config_exception: Optional[Any] = field(default=None)
    lifecycle_hook_limit_exceeded_exception: Optional[Any] = field(default=None)
    role_required_exception: Optional[Any] = field(default=None)
    tag_set_list_limit_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    trigger_targets_limit_exceeded_exception: Optional[Any] = field(default=None)
    
