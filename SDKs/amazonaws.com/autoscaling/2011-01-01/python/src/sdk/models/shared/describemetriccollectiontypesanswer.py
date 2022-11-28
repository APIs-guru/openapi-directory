from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeMetricCollectionTypesAnswer:
    granularities: Optional[List[MetricGranularityType]] = field(default=None)
    metrics: Optional[List[MetricCollectionType]] = field(default=None)
    
