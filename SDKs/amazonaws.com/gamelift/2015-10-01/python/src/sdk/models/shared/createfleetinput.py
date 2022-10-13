from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificateconfiguration
from . import ippermission
from . import ec2instancetype_enum
from . import fleettype_enum
from . import locationconfiguration
from . import protectionpolicy_enum
from . import resourcecreationlimitpolicy
from . import runtimeconfiguration
from . import tag


@dataclass_json
@dataclass
class CreateFleetInput:
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildId' }})
    certificate_configuration: Optional[certificateconfiguration.CertificateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateConfiguration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    ec2_inbound_permissions: Optional[List[ippermission.IPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2InboundPermissions' }})
    ec2_instance_type: ec2instancetype_enum.Ec2InstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2InstanceType' }})
    fleet_type: Optional[fleettype_enum.FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetType' }})
    instance_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRoleArn' }})
    locations: Optional[List[locationconfiguration.LocationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locations' }})
    log_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPaths' }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricGroups' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    new_game_session_protection_policy: Optional[protectionpolicy_enum.ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewGameSessionProtectionPolicy' }})
    peer_vpc_aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcAwsAccountId' }})
    peer_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeerVpcId' }})
    resource_creation_limit_policy: Optional[resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCreationLimitPolicy' }})
    runtime_configuration: Optional[runtimeconfiguration.RuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeConfiguration' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptId' }})
    server_launch_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerLaunchParameters' }})
    server_launch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerLaunchPath' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
