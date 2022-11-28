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
class Task:
    r"""Task
    Details on a task in a cluster.
    """
    
    attachments: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    capacity_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderName') }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterArn') }})
    connectivity: Optional[ConnectivityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    connectivity_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivityAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstanceArn') }})
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    desired_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredStatus') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExecuteCommand') }})
    ephemeral_storage: Optional[EphemeralStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ephemeralStorage') }})
    execution_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStoppedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    health_status: Optional[HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthStatus') }})
    inference_accelerators: Optional[List[InferenceAccelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inferenceAccelerators') }})
    last_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatus') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    overrides: Optional[TaskOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    pull_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullStartedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pull_stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullStoppedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    stop_code: Optional[TaskStopCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopCode') }})
    stopped_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stopped_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedReason') }})
    stopping_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppingAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    task_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinitionArn') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
