from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customizedloadmetricspecification
from . import predefinedloadmetricspecification
from . import predictivescalingmaxcapacitybehavior_enum
from . import predictivescalingmode_enum
from . import scalabledimension_enum
from . import scalingpolicyupdatebehavior_enum
from . import servicenamespace_enum
from . import targettrackingconfiguration


@dataclass_json
@dataclass
class ScalingInstruction:
    customized_load_metric_specification: Optional[customizedloadmetricspecification.CustomizedLoadMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomizedLoadMetricSpecification' }})
    disable_dynamic_scaling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableDynamicScaling' }})
    max_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    min_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCapacity' }})
    predefined_load_metric_specification: Optional[predefinedloadmetricspecification.PredefinedLoadMetricSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredefinedLoadMetricSpecification' }})
    predictive_scaling_max_capacity_behavior: Optional[predictivescalingmaxcapacitybehavior_enum.PredictiveScalingMaxCapacityBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictiveScalingMaxCapacityBehavior' }})
    predictive_scaling_max_capacity_buffer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictiveScalingMaxCapacityBuffer' }})
    predictive_scaling_mode: Optional[predictivescalingmode_enum.PredictiveScalingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictiveScalingMode' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    scaling_policy_update_behavior: Optional[scalingpolicyupdatebehavior_enum.ScalingPolicyUpdateBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPolicyUpdateBehavior' }})
    scheduled_action_buffer_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledActionBufferTime' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    target_tracking_configurations: List[targettrackingconfiguration.TargetTrackingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTrackingConfigurations' }})
    
