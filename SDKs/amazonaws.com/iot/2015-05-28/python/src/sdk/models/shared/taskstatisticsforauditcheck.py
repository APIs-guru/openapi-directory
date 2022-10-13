from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskStatisticsForAuditCheck:
    canceled_findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceledFindingsCount' }})
    failed_findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedFindingsCount' }})
    skipped_findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippedFindingsCount' }})
    succeeded_findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededFindingsCount' }})
    total_findings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFindingsCount' }})
    
