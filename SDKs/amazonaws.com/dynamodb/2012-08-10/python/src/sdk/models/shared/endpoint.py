from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Endpoint:
    r"""Endpoint
    An endpoint information details.
    """
    
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    cache_period_in_minutes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CachePeriodInMinutes') }})
    
