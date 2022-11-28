from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetReportGroupTrendInput:
    report_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroupArn') }})
    trend_field: ReportGroupTrendFieldTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trendField') }})
    num_of_reports: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOfReports') }})
    
