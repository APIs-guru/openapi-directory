from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFleetInput:
    r"""CreateFleetInput
    Represents the input for a request operation.
    """
    
    ec2_instance_type: Ec2InstanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildId') }})
    certificate_configuration: Optional[CertificateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateConfiguration') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    ec2_inbound_permissions: Optional[List[IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InboundPermissions') }})
    fleet_type: Optional[FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetType') }})
    instance_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRoleArn') }})
    locations: Optional[List[LocationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locations') }})
    log_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPaths') }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricGroups') }})
    new_game_session_protection_policy: Optional[ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewGameSessionProtectionPolicy') }})
    peer_vpc_aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcAwsAccountId') }})
    peer_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeerVpcId') }})
    resource_creation_limit_policy: Optional[ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCreationLimitPolicy') }})
    runtime_configuration: Optional[RuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeConfiguration') }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScriptId') }})
    server_launch_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchParameters') }})
    server_launch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerLaunchPath') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
