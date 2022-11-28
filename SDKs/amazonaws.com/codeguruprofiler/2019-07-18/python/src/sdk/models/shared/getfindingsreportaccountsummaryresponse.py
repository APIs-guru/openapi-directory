from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFindingsReportAccountSummaryResponse:
    r"""GetFindingsReportAccountSummaryResponse
    The structure representing the GetFindingsReportAccountSummaryResponse.
    """
    
    report_summaries: List[FindingsReportSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
