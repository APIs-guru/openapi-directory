from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VirtualInterfaceTestHistory:
    bgp_peers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeers' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testDurationInMinutes' }})
    test_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testId' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
