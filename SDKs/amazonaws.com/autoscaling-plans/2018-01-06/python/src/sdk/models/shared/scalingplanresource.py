from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingPlanResource:
    r"""ScalingPlanResource
    Represents a scalable resource.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: ScalableDimensionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    scaling_plan_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    scaling_status_code: ScalingStatusCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingStatusCode') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    scaling_policies: Optional[List[ScalingPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPolicies') }})
    scaling_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingStatusMessage') }})
    
