from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import scalingpolicy
from . import scalingstatuscode_enum
from . import servicenamespace_enum


@dataclass_json
@dataclass
class ScalingPlanResource:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    scaling_plan_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanName' }})
    scaling_plan_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanVersion' }})
    scaling_policies: Optional[List[scalingpolicy.ScalingPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPolicies' }})
    scaling_status_code: scalingstatuscode_enum.ScalingStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingStatusCode' }})
    scaling_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingStatusMessage' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    
