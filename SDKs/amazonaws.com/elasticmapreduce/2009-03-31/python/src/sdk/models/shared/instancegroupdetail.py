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
class InstanceGroupDetail:
    r"""InstanceGroupDetail
    Detailed information about an instance group.
    """
    
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_request_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRequestCount') }})
    instance_role: InstanceRoleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRole') }})
    instance_running_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRunningCount') }})
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    market: MarketTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Market') }})
    state: InstanceGroupStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BidPrice') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupId') }})
    last_state_change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStateChangeReason') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    ready_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadyDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
