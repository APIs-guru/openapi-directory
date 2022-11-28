from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudWatchMetricsDimension:
    r"""CloudWatchMetricsDimension
     The dimension of a Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension\">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. 
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
