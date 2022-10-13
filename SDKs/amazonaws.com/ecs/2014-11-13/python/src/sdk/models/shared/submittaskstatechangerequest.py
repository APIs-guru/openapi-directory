from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachmentstatechange
from . import containerstatechange
from . import managedagentstatechange


@dataclass_json
@dataclass
class SubmitTaskStateChangeRequest:
    attachments: Optional[List[attachmentstatechange.AttachmentStateChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    containers: Optional[List[containerstatechange.ContainerStateChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    execution_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStoppedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_agents: Optional[List[managedagentstatechange.ManagedAgentStateChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedAgents' }})
    pull_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullStartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullStoppedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
