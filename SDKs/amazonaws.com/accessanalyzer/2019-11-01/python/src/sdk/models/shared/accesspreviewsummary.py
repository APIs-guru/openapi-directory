from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesspreviewstatus_enum
from . import accesspreviewstatusreason


@dataclass_json
@dataclass
class AccessPreviewSummary:
    analyzer_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzerArn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: accesspreviewstatus_enum.AccessPreviewStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[accesspreviewstatusreason.AccessPreviewStatusReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    
