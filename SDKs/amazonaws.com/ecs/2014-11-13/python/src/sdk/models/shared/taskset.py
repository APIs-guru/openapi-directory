from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskSet:
    r"""TaskSet
    Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic.
    """
    
    capacity_provider_strategy: Optional[List[CapacityProviderStrategyItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterArn') }})
    computed_desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computedDesiredCount') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[List[LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingCount') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningCount') }})
    scale: Optional[Scale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArn') }})
    service_registries: Optional[List[ServiceRegistry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    stability_status: Optional[StabilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stabilityStatus') }})
    stability_status_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stabilityStatusAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    task_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSetArn') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
