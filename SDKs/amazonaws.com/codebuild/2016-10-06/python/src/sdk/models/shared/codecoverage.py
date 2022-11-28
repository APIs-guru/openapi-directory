from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeCoverage:
    r"""CodeCoverage
    <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
    """
    
    branch_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchCoveragePercentage') }})
    branches_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchesCovered') }})
    branches_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchesMissed') }})
    expired: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_coverage_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineCoveragePercentage') }})
    lines_covered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linesCovered') }})
    lines_missed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linesMissed') }})
    report_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportARN') }})
    
