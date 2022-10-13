from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import migrationtasksummary


@dataclass_json
@dataclass
class ListMigrationTasksResult:
    migration_task_summary_list: Optional[List[migrationtasksummary.MigrationTaskSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
