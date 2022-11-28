from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIStage:
    r"""APIStage
    API stage name of the associated API stage in a usage plan.
    """
    
    api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiId') }})
    stage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    throttle: Optional[dict[str, ThrottleSettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttle') }})
    
