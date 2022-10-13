from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportcodecoveragesortbytype_enum
from . import sortordertype_enum


@dataclass_json
@dataclass
class DescribeCodeCoveragesInput:
    max_line_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLineCoveragePercentage' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    min_line_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLineCoveragePercentage' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    report_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportArn' }})
    sort_by: Optional[reportcodecoveragesortbytype_enum.ReportCodeCoverageSortByTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    sort_order: Optional[sortordertype_enum.SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
