from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeCoverageReportSummary:
    branch_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchCoveragePercentage' }})
    branches_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchesCovered' }})
    branches_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchesMissed' }})
    line_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineCoveragePercentage' }})
    lines_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesCovered' }})
    lines_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesMissed' }})
    
