from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import certificateconfiguration
from . import fleettype_enum
from . import ec2instancetype_enum
from . import protectionpolicy_enum
from . import operatingsystem_enum
from . import resourcecreationlimitpolicy
from . import fleetstatus_enum
from . import fleetaction_enum


@dataclass_json
@dataclass
class FleetAttributes:
    build_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildArn' }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildId' }})
    certificate_configuration: Optional[certificateconfiguration.CertificateConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateConfiguration' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    fleet_type: Optional[fleettype_enum.FleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetType' }})
    instance_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRoleArn' }})
    instance_type: Optional[ec2instancetype_enum.Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    log_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPaths' }})
    metric_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricGroups' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    new_game_session_protection_policy: Optional[protectionpolicy_enum.ProtectionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewGameSessionProtectionPolicy' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    resource_creation_limit_policy: Optional[resourcecreationlimitpolicy.ResourceCreationLimitPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCreationLimitPolicy' }})
    script_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptArn' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptId' }})
    server_launch_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerLaunchParameters' }})
    server_launch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerLaunchPath' }})
    status: Optional[fleetstatus_enum.FleetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    stopped_actions: Optional[List[fleetaction_enum.FleetActionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppedActions' }})
    termination_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
