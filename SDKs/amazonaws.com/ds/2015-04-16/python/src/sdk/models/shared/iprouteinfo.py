from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import iproutestatusmsg_enum


@dataclass_json
@dataclass
class IPRouteInfo:
    added_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cidr_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrIp' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    ip_route_status_msg: Optional[iproutestatusmsg_enum.IPRouteStatusMsgEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRouteStatusMsg' }})
    ip_route_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRouteStatusReason' }})
    
