from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredefinedScalingMetricSpecification:
    r"""PredefinedScalingMetricSpecification
    Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
    """
    
    predefined_scaling_metric_type: ScalingMetricTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedScalingMetricType') }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLabel') }})
    
