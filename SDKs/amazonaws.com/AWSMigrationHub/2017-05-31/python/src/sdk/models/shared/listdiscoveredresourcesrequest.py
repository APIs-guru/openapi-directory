from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListDiscoveredResourcesRequest:
    migration_task_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
