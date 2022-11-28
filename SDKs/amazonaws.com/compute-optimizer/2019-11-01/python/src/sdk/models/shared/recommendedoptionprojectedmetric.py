from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendedOptionProjectedMetric:
    r"""RecommendedOptionProjectedMetric
    <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href=\"https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent\">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
    """
    
    projected_metrics: Optional[List[ProjectedMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedMetrics') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    recommended_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInstanceType') }})
    
