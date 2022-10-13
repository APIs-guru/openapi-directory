from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeCoverage:
    branch_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchCoveragePercentage' }})
    branches_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchesCovered' }})
    branches_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchesMissed' }})
    expired: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineCoveragePercentage' }})
    lines_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesCovered' }})
    lines_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesMissed' }})
    report_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportARN' }})
    
