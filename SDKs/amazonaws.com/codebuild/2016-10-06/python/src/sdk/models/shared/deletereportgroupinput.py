from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteReportGroupInput:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    delete_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteReports' }})
    
