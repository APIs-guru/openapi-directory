from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebhookFilter:
    r"""WebhookFilter
     A filter used to determine which webhooks trigger a build. 
    """
    
    pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    type: WebhookFilterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    exclude_matched_pattern: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeMatchedPattern') }})
    
