from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bulkpublishstatus_enum


@dataclass_json
@dataclass
class GetBulkPublishDetailsResponse:
    bulk_publish_complete_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkPublishCompleteTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bulk_publish_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkPublishStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bulk_publish_status: Optional[bulkpublishstatus_enum.BulkPublishStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkPublishStatus' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    
