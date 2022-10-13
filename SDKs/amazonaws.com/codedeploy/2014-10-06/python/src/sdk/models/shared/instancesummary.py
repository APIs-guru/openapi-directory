from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancetype_enum
from . import lifecycleevent
from . import instancestatus_enum


@dataclass_json
@dataclass
class InstanceSummary:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    instance_type: Optional[instancetype_enum.InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_events: Optional[List[lifecycleevent.LifecycleEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleEvents' }})
    status: Optional[instancestatus_enum.InstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
