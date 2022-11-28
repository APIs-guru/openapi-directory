from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualInterfaceTestHistory:
    r"""VirtualInterfaceTestHistory
    Information about the virtual interface failover test.
    """
    
    bgp_peers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeers') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDurationInMinutes') }})
    test_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testId') }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    
