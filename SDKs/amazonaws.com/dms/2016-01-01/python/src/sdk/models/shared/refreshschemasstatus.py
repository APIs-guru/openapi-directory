from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import refreshschemasstatustypevalue_enum


@dataclass_json
@dataclass
class RefreshSchemasStatus:
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    last_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastFailureMessage' }})
    last_refresh_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRefreshDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replication_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationInstanceArn' }})
    status: Optional[refreshschemasstatustypevalue_enum.RefreshSchemasStatusTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
