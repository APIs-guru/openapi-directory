from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MigrationTask:
    r"""MigrationTask
    Represents a migration task in a migration tool.
    """
    
    migration_task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    resource_attribute_list: Optional[List[ResourceAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAttributeList') }})
    task: Optional[Task] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Task') }})
    update_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
