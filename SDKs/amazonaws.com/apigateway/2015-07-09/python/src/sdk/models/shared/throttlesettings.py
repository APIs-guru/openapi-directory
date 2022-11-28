from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThrottleSettings:
    r"""ThrottleSettings
     The API request rate limits.
    """
    
    burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('burstLimit') }})
    rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimit') }})
    
