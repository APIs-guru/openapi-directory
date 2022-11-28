from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredefinedMetricSpecification:
    r"""PredefinedMetricSpecification
    <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href=\"https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html\">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
    """
    
    predefined_metric_type: MetricTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredefinedMetricType') }})
    resource_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLabel') }})
    
