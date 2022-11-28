from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Metrics:
    r"""Metrics
     Information about the statistics from the code review. 
    """
    
    findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingsCount') }})
    metered_lines_of_code_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MeteredLinesOfCodeCount') }})
    
