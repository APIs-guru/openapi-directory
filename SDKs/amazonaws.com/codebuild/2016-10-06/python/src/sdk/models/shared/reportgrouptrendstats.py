from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReportGroupTrendStats:
    r"""ReportGroupTrendStats
    Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
    """
    
    average: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    
