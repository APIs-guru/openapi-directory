from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationeventresourcetype_enum
from . import configurationeventstatus_enum


@dataclass_json
@dataclass
class ConfigurationEvent:
    event_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventDetail' }})
    event_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventResourceName' }})
    event_resource_type: Optional[configurationeventresourcetype_enum.ConfigurationEventResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventResourceType' }})
    event_status: Optional[configurationeventstatus_enum.ConfigurationEventStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventStatus' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitored_resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoredResourceARN' }})
    
