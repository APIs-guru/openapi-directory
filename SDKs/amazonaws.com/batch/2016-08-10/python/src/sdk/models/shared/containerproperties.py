from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerProperties:
    r"""ContainerProperties
    Container properties are used in job definitions to describe the container that's launched as part of a job.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    fargate_platform_configuration: Optional[FargatePlatformConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fargatePlatformConfiguration') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    job_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRoleArn') }})
    linux_parameters: Optional[LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    mount_points: Optional[List[MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    network_configuration: Optional[NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    resource_requirements: Optional[List[ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[List[Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ulimits: Optional[List[Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
