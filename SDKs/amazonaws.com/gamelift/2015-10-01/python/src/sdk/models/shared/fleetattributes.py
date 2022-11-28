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
class FleetAttributes:
    r"""FleetAttributes
    <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
    """
    
    build_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildArn') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildId') }})
    certificate_configuration: Optional[CertificateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateConfiguration') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    fleet_type: Optional[FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    instance_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRoleArn') }})
    instance_type: Optional[Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    log_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPaths') }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    new_game_session_protection_policy: Optional[ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    operating_system: Optional[OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    resource_creation_limit_policy: Optional[ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    script_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptArn') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptId') }})
    server_launch_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchParameters') }})
    server_launch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchPath') }})
    status: Optional[FleetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    stopped_actions: Optional[List[FleetActionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppedActions') }})
    termination_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
