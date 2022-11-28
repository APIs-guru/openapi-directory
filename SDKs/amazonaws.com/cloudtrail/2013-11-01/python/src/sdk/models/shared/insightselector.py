from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightSelector:
    r"""InsightSelector
    A JSON string that contains a list of insight types that are logged on a trail.
    """
    
    insight_type: Optional[InsightTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightType') }})
    
