from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conformancepackstate_enum


@dataclass_json
@dataclass
class ConformancePackStatusDetail:
    conformance_pack_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackArn' }})
    conformance_pack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackId' }})
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    conformance_pack_state: conformancepackstate_enum.ConformancePackStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackState' }})
    conformance_pack_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackStatusReason' }})
    last_update_completed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateCompletedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_requested_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateRequestedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stack_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackArn' }})
    
