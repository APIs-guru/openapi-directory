from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskStatistics:
    canceled_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceledChecks' }})
    compliant_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliantChecks' }})
    failed_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedChecks' }})
    in_progress_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressChecks' }})
    non_compliant_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCompliantChecks' }})
    total_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalChecks' }})
    waiting_for_data_collection_checks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitingForDataCollectionChecks' }})
    
