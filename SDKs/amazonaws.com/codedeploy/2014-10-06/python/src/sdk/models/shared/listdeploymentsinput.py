from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timerange
from . import deploymentstatus_enum


@dataclass_json
@dataclass
class ListDeploymentsInput:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    create_time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTimeRange' }})
    deployment_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentGroupName' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    include_only_statuses: Optional[List[deploymentstatus_enum.DeploymentStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeOnlyStatuses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
