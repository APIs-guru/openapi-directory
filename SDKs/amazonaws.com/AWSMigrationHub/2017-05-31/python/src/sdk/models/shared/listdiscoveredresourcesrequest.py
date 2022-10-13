from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListDiscoveredResourcesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    migration_task_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    progress_update_stream: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    
