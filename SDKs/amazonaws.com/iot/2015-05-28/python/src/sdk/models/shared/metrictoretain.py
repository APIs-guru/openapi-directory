from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricToRetain:
    r"""MetricToRetain
    The metric you want to retain. Dimensions are optional.
    """
    
    metric: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_dimension: Optional[MetricDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricDimension') }})
    
