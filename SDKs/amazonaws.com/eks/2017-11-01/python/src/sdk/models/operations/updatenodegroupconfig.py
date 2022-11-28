from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateNodegroupConfigPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    nodegroup_name: str = field(metadata={'path_param': { 'field_name': 'nodegroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNodegroupConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNodegroupConfigRequestBodyLabels:
    r"""UpdateNodegroupConfigRequestBodyLabels
    An object representing a Kubernetes label change for a managed node group.
    """
    
    add_or_update_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOrUpdateLabels') }})
    remove_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeLabels') }})
    

@dataclass_json
@dataclass
class UpdateNodegroupConfigRequestBodyScalingConfig:
    r"""UpdateNodegroupConfigRequestBodyScalingConfig
    An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
    """
    
    desired_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredSize') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSize') }})
    

@dataclass_json
@dataclass
class UpdateNodegroupConfigRequestBodyTaints:
    r"""UpdateNodegroupConfigRequestBodyTaints
    An object representing the details of an update to a taints payload.
    """
    
    add_or_update_taints: Optional[List[shared.Taint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOrUpdateTaints') }})
    remove_taints: Optional[List[shared.Taint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeTaints') }})
    

@dataclass_json
@dataclass
class UpdateNodegroupConfigRequestBodyUpdateConfig:
    r"""UpdateNodegroupConfigRequestBodyUpdateConfig
    The node group update configuration.
    """
    
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailable') }})
    max_unavailable_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailablePercentage') }})
    

@dataclass_json
@dataclass
class UpdateNodegroupConfigRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    labels: Optional[UpdateNodegroupConfigRequestBodyLabels] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    scaling_config: Optional[UpdateNodegroupConfigRequestBodyScalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scalingConfig') }})
    taints: Optional[UpdateNodegroupConfigRequestBodyTaints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    update_config: Optional[UpdateNodegroupConfigRequestBodyUpdateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConfig') }})
    

@dataclass
class UpdateNodegroupConfigRequest:
    headers: UpdateNodegroupConfigHeaders = field()
    path_params: UpdateNodegroupConfigPathParams = field()
    request: UpdateNodegroupConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNodegroupConfigResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_nodegroup_config_response: Optional[shared.UpdateNodegroupConfigResponse] = field(default=None)
    
