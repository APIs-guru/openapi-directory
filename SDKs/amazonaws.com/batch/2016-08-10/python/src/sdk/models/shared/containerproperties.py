from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyvaluepair
from . import fargateplatformconfiguration
from . import linuxparameters
from . import logconfiguration
from . import mountpoint
from . import networkconfiguration
from . import resourcerequirement
from . import secret
from . import ulimit
from . import volume


@dataclass_json
@dataclass
class ContainerProperties:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    fargate_platform_configuration: Optional[fargateplatformconfiguration.FargatePlatformConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargatePlatformConfiguration' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    job_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRoleArn' }})
    linux_parameters: Optional[linuxparameters.LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxParameters' }})
    log_configuration: Optional[logconfiguration.LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfiguration' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    mount_points: Optional[List[mountpoint.MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoints' }})
    network_configuration: Optional[networkconfiguration.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privileged' }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyRootFilesystem' }})
    resource_requirements: Optional[List[resourcerequirement.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    secrets: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    ulimits: Optional[List[ulimit.Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ulimits' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    
