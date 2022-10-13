from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportWithRawData:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    report_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportArn' }})
    
