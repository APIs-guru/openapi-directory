from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsJobRateIncreaseCriteria:
    number_of_notified_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfNotifiedThings' }})
    number_of_succeeded_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfSucceededThings' }})
    
