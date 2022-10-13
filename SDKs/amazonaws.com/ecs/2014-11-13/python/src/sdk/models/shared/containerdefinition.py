from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerdependency
from . import keyvaluepair
from . import environmentfile
from . import hostentry
from . import firelensconfiguration
from . import healthcheck
from . import linuxparameters
from . import logconfiguration
from . import mountpoint
from . import portmapping
from . import repositorycredentials
from . import resourcerequirement
from . import secret
from . import systemcontrol
from . import ulimit
from . import volumefrom


@dataclass_json
@dataclass
class ContainerDefinition:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpu' }})
    depends_on: Optional[List[containerdependency.ContainerDependency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependsOn' }})
    disable_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableNetworking' }})
    dns_search_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsSearchDomains' }})
    dns_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsServers' }})
    docker_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerLabels' }})
    docker_security_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerSecurityOptions' }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoint' }})
    environment: Optional[List[keyvaluepair.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    environment_files: Optional[List[environmentfile.EnvironmentFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentFiles' }})
    essential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'essential' }})
    extra_hosts: Optional[List[hostentry.HostEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraHosts' }})
    firelens_configuration: Optional[firelensconfiguration.FirelensConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firelensConfiguration' }})
    health_check: Optional[healthcheck.HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactive' }})
    links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    linux_parameters: Optional[linuxparameters.LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxParameters' }})
    log_configuration: Optional[logconfiguration.LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfiguration' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryReservation' }})
    mount_points: Optional[List[mountpoint.MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoints' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port_mappings: Optional[List[portmapping.PortMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMappings' }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privileged' }})
    pseudo_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pseudoTerminal' }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyRootFilesystem' }})
    repository_credentials: Optional[repositorycredentials.RepositoryCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryCredentials' }})
    resource_requirements: Optional[List[resourcerequirement.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    secrets: Optional[List[secret.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    start_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeout' }})
    stop_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTimeout' }})
    system_controls: Optional[List[systemcontrol.SystemControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemControls' }})
    ulimits: Optional[List[ulimit.Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ulimits' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    volumes_from: Optional[List[volumefrom.VolumeFrom]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumesFrom' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDirectory' }})
    
