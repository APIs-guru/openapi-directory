from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lifecycleevent
from . import targetstatus_enum


@dataclass_json
@dataclass
class CloudFormationTarget:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_events: Optional[List[lifecycleevent.LifecycleEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleEvents' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    status: Optional[targetstatus_enum.TargetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    target_version_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetVersionWeight' }})
    
