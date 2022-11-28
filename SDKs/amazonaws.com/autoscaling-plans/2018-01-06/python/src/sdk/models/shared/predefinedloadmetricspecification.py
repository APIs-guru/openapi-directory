from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredefinedLoadMetricSpecification:
    r"""PredefinedLoadMetricSpecification
    <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource\">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>
    """
    
    predefined_load_metric_type: LoadMetricTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedLoadMetricType') }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLabel') }})
    
