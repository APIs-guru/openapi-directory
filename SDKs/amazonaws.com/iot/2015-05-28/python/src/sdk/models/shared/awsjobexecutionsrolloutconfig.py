from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsJobExecutionsRolloutConfig:
    r"""AwsJobExecutionsRolloutConfig
    Configuration for the rollout of OTA updates.
    """
    
    exponential_rate: Optional[AwsJobExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    
