from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import scalabletargetaction
from . import servicenamespace_enum


@dataclass_json
@dataclass
class ScheduledAction:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: Optional[scalabledimension_enum.ScalableDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    scalable_target_action: Optional[scalabletargetaction.ScalableTargetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableTargetAction' }})
    schedule: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    scheduled_action_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledActionARN' }})
    scheduled_action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledActionName' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    
