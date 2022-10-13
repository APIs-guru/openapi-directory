from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import workspacestatus


@dataclass_json
@dataclass
class WorkspaceDescription:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prometheus_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prometheusEndpoint' }})
    status: workspacestatus.WorkspaceStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
