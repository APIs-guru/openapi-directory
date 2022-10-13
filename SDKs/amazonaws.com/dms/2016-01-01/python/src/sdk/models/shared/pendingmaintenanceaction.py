from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PendingMaintenanceAction:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    auto_applied_after_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAppliedAfterDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_apply_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplyDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    forced_apply_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForcedApplyDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    opt_in_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptInStatus' }})
    
