from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceroletype_enum
from . import markettype_enum
from . import instancegroupstate_enum


@dataclass_json
@dataclass
class InstanceGroupDetail:
    bid_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BidPrice' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupId' }})
    instance_request_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRequestCount' }})
    instance_role: instanceroletype_enum.InstanceRoleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRole' }})
    instance_running_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRunningCount' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    last_state_change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStateChangeReason' }})
    market: markettype_enum.MarketTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Market' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    ready_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadyDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: instancegroupstate_enum.InstanceGroupStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
