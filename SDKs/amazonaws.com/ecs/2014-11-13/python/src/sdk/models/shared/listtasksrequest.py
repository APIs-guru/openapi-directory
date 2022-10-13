from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import desiredstatus_enum
from . import launchtype_enum


@dataclass_json
@dataclass
class ListTasksRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    container_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstance' }})
    desired_status: Optional[desiredstatus_enum.DesiredStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredStatus' }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    launch_type: Optional[launchtype_enum.LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchType' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedBy' }})
    
