from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvaluepair
from . import fargateplatformconfiguration
from . import linuxparameters
from . import logconfiguration
from . import mountpoint
from . import networkconfiguration
from . import networkinterface
from . import resourcerequirement
from . import secret
from . import ulimit
from . import volume


@dataclass_json
@dataclass
class ContainerDetail:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerInstanceArn' }})
    environment: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    fargate_platform_configuration: Optional[fargateplatformconfiguration.FargatePlatformConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargatePlatformConfiguration' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    job_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRoleArn' }})
    linux_parameters: Optional[linuxparameters.LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxParameters' }})
    log_configuration: Optional[logconfiguration.LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfiguration' }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamName' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    mount_points: Optional[List[mountpoint.MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoints' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privileged' }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyRootFilesystem' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    resource_requirements: Optional[List[resourcerequirement.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    secrets: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    ulimits: Optional[List[ulimit.Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ulimits' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
