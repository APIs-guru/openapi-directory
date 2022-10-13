from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactstatus_enum
from . import dataflowdetail
from . import elevation


@dataclass_json
@dataclass
class DescribeContactResponse:
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactId' }})
    contact_status: Optional[contactstatus_enum.ContactStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactStatus' }})
    dataflow_list: Optional[List[dataflowdetail.DataflowDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowList' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    ground_station: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groundStation' }})
    maximum_elevation: Optional[elevation.Elevation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumElevation' }})
    mission_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileArn' }})
    post_pass_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postPassEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pre_pass_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prePassStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    satellite_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satelliteArn' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
