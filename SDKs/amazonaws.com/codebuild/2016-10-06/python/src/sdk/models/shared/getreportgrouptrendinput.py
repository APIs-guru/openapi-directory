from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportgrouptrendfieldtype_enum


@dataclass_json
@dataclass
class GetReportGroupTrendInput:
    num_of_reports: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numOfReports' }})
    report_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGroupArn' }})
    trend_field: reportgrouptrendfieldtype_enum.ReportGroupTrendFieldTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trendField' }})
    
