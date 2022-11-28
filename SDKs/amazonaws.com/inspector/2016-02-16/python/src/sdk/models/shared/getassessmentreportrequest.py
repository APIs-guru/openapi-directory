from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAssessmentReportRequest:
    assessment_run_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArn') }})
    report_file_format: ReportFileFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFileFormat') }})
    report_type: ReportTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
