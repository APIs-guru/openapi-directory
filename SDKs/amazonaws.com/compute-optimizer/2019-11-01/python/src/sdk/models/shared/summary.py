from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Summary:
    r"""Summary
    The summary of a recommendation.
    """
    
    name: Optional[FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason_code_summaries: Optional[List[ReasonCodeSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCodeSummaries') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
