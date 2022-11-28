from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EcsTarget:
    r"""EcsTarget
     Information about the target of an Amazon ECS deployment. 
    """
    
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_events: Optional[List[LifecycleEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleEvents') }})
    status: Optional[TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    task_sets_info: Optional[List[EcsTaskSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSetsInfo') }})
    
