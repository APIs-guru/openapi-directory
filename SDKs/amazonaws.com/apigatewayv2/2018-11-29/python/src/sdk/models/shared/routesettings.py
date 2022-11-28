from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteSettings:
    r"""RouteSettings
    Represents a collection of route settings.
    """
    
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTraceEnabled') }})
    detailed_metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailedMetricsEnabled') }})
    logging_level: Optional[LoggingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingLevel') }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThrottlingBurstLimit') }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThrottlingRateLimit') }})
    
