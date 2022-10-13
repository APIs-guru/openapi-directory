from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import reportfileformat_enum
from . import reporttype_enum


@dataclass_json
@dataclass
class GetAssessmentReportRequest:
    assessment_run_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunArn' }})
    report_file_format: reportfileformat_enum.ReportFileFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportFileFormat' }})
    report_type: reporttype_enum.ReportTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    
