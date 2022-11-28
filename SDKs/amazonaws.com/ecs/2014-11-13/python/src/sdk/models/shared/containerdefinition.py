from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerDefinition:
    r"""ContainerDefinition
    Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    depends_on: Optional[List[ContainerDependency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    disable_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNetworking') }})
    dns_search_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSearchDomains') }})
    dns_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsServers') }})
    docker_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerLabels') }})
    docker_security_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerSecurityOptions') }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_files: Optional[List[EnvironmentFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentFiles') }})
    essential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('essential') }})
    extra_hosts: Optional[List[HostEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraHosts') }})
    firelens_configuration: Optional[FirelensConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firelensConfiguration') }})
    health_check: Optional[HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactive') }})
    links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    linux_parameters: Optional[LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReservation') }})
    mount_points: Optional[List[MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_mappings: Optional[List[PortMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMappings') }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    pseudo_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pseudoTerminal') }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    repository_credentials: Optional[RepositoryCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryCredentials') }})
    resource_requirements: Optional[List[ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[List[Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    start_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeout') }})
    stop_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimeout') }})
    system_controls: Optional[List[SystemControl]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemControls') }})
    ulimits: Optional[List[Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    volumes_from: Optional[List[VolumeFrom]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumesFrom') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    
