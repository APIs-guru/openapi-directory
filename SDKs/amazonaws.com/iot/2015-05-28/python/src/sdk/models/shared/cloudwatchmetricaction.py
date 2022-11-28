from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudwatchMetricAction:
    r"""CloudwatchMetricAction
    Describes an action that captures a CloudWatch metric.
    """
    
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNamespace') }})
    metric_unit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricUnit') }})
    metric_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    metric_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTimestamp') }})
    
