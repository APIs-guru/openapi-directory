from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import testgridsessionstatus_enum


@dataclass_json
@dataclass
class ListTestGridSessionsRequest:
    creation_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_result: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResult' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    status: Optional[testgridsessionstatus_enum.TestGridSessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
