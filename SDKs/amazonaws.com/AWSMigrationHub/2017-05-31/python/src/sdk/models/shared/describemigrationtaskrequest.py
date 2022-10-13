from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeMigrationTaskRequest:
    migration_task_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    progress_update_stream: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    
