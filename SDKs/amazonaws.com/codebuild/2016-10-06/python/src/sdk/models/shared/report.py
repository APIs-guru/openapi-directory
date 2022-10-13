from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import codecoveragereportsummary
from . import reportexportconfig
from . import reportstatustype_enum
from . import testreportsummary
from . import reporttype_enum


@dataclass_json
@dataclass
class Report:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    code_coverage_summary: Optional[codecoveragereportsummary.CodeCoverageReportSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeCoverageSummary' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    expired: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_config: Optional[reportexportconfig.ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    report_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportGroupArn' }})
    status: Optional[reportstatustype_enum.ReportStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_summary: Optional[testreportsummary.TestReportSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSummary' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    type: Optional[reporttype_enum.ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
