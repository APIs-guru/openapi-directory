from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import exponentialrolloutrate


@dataclass_json
@dataclass
class JobExecutionsRolloutConfig:
    exponential_rate: Optional[exponentialrolloutrate.ExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    
