from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsPagedClientStatusMetadata:
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offset') }})
    report_result_expected: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportResultExpected') }})
    report_result_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportResultLabel') }})
    report_value_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportValueLabel') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
