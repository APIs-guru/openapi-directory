from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsPagedClientStatusMetadata:
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Offset' }})
    report_result_expected: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportResultExpected' }})
    report_result_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportResultLabel' }})
    report_value_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportValueLabel' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
