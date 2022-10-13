from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import migrationtask


@dataclass_json
@dataclass
class DescribeMigrationTaskResult:
    migration_task: Optional[migrationtask.MigrationTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTask' }})
    
