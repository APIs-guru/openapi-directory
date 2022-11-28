from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IoTJobRateIncreaseCriteria:
    r"""IoTJobRateIncreaseCriteria
    Contains information about criteria to meet before a job increases its rollout rate. Specify either <code>numberOfNotifiedThings</code> or <code>numberOfSucceededThings</code>.
    """
    
    number_of_notified_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfNotifiedThings') }})
    number_of_succeeded_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfSucceededThings') }})
    
