from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceattribute
from . import task


@dataclass_json
@dataclass
class MigrationTask:
    migration_task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    progress_update_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    resource_attribute_list: Optional[List[resourceattribute.ResourceAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceAttributeList' }})
    task: Optional[task.Task] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Task' }})
    update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
