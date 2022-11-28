from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Report:
    r"""Report
    Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    code_coverage_summary: Optional[CodeCoverageReportSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeCoverageSummary') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    expired: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_config: Optional[ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    report_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGroupArn') }})
    status: Optional[ReportStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_summary: Optional[TestReportSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSummary') }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncated') }})
    type: Optional[ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
