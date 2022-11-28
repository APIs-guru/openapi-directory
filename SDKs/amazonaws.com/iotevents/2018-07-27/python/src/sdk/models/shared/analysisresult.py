from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalysisResult:
    r"""AnalysisResult
    Contains the result of the analysis.
    """
    
    level: Optional[AnalysisResultLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    locations: Optional[List[AnalysisResultLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
