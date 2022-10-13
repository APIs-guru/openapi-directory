from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lifecycleevent
from . import targetstatus_enum
from . import ecstaskset


@dataclass_json
@dataclass
class EcsTarget:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_events: Optional[List[lifecycleevent.LifecycleEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleEvents' }})
    status: Optional[targetstatus_enum.TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    task_sets_info: Optional[List[ecstaskset.EcsTaskSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSetsInfo' }})
    
