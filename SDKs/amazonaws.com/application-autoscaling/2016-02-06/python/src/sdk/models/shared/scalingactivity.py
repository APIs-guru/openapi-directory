from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import servicenamespace_enum
from . import scalingactivitystatuscode_enum


@dataclass_json
@dataclass
class ScalingActivity:
    activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityId' }})
    cause: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cause' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_code: scalingactivitystatuscode_enum.ScalingActivityStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    
