from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectedMetric:
    r"""ProjectedMetric
    <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href=\"https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent\">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
    """
    
    name: Optional[MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timestamps: Optional[List[datetime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamps') }})
    values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
