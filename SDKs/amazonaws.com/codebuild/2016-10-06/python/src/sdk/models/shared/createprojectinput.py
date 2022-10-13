from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectartifacts
from . import projectbuildbatchconfig
from . import projectcache
from . import projectenvironment
from . import projectfilesystemlocation
from . import logsconfig
from . import projectartifacts
from . import projectsourceversion
from . import projectsource
from . import projectsource
from . import tag
from . import vpcconfig


@dataclass_json
@dataclass
class CreateProjectInput:
    artifacts: projectartifacts.ProjectArtifacts = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    badge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeEnabled' }})
    build_batch_config: Optional[projectbuildbatchconfig.ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchConfig' }})
    cache: Optional[projectcache.ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache' }})
    concurrent_build_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentBuildLimit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    environment: projectenvironment.ProjectEnvironment = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    file_system_locations: Optional[List[projectfilesystemlocation.ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemLocations' }})
    logs_config: Optional[logsconfig.LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedTimeoutInMinutes' }})
    secondary_artifacts: Optional[List[projectartifacts.ProjectArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifacts' }})
    secondary_source_versions: Optional[List[projectsourceversion.ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourceVersions' }})
    secondary_sources: Optional[List[projectsource.ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySources' }})
    service_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    source: projectsource.ProjectSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMinutes' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
