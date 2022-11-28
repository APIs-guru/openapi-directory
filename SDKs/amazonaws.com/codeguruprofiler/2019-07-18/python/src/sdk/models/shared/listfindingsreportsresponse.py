from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFindingsReportsResponse:
    r"""ListFindingsReportsResponse
    The structure representing the ListFindingsReportsResponse.
    """
    
    findings_report_summaries: List[FindingsReportSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsReportSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
