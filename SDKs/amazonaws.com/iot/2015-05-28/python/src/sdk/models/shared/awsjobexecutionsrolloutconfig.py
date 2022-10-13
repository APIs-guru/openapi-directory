from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsjobexponentialrolloutrate


@dataclass_json
@dataclass
class AwsJobExecutionsRolloutConfig:
    exponential_rate: Optional[awsjobexponentialrolloutrate.AwsJobExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    
