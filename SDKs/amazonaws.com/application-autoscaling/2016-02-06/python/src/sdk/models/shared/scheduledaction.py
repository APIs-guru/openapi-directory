from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduledAction:
    r"""ScheduledAction
    Represents a scheduled action.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    schedule: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    scheduled_action_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionARN') }})
    scheduled_action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActionName') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scalable_dimension: Optional[ScalableDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    scalable_target_action: Optional[ScalableTargetAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableTargetAction') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    
