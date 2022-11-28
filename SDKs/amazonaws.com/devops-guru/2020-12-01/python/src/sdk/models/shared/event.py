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
class Event:
    r"""Event
     An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
    """
    
    data_source: Optional[EventDataSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    event_class: Optional[EventClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventClass') }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource_collection: Optional[ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    resources: Optional[List[EventResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
