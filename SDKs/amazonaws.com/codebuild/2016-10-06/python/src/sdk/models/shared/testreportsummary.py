from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestReportSummary:
    r"""TestReportSummary
     Information about a test report. 
    """
    
    duration_in_nano_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInNanoSeconds') }})
    status_counts: dict[str, int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCounts') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
