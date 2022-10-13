from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agentupdatestatus_enum
from . import attachment
from . import attribute
from . import resource
from . import resource
from . import tag
from . import versioninfo


@dataclass_json
@dataclass
class ContainerInstance:
    agent_connected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentConnected' }})
    agent_update_status: Optional[agentupdatestatus_enum.AgentUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUpdateStatus' }})
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    capacity_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviderName' }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstanceArn' }})
    ec2_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceId' }})
    pending_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingTasksCount' }})
    registered_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registered_resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredResources' }})
    remaining_resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingResources' }})
    running_tasks_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningTasksCount' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusReason' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    version_info: Optional[versioninfo.VersionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
