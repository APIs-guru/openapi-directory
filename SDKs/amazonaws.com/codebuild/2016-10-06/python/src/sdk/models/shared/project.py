from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import projectartifacts
from . import projectbadge
from . import projectbuildbatchconfig
from . import projectcache
from . import projectenvironment
from . import projectfilesystemlocation
from . import logsconfig
from . import projectvisibilitytype_enum
from . import projectartifacts
from . import projectsourceversion
from . import projectsource
from . import projectsource
from . import tag
from . import vpcconfig
from . import webhook


@dataclass_json
@dataclass
class Project:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    artifacts: Optional[projectartifacts.ProjectArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    badge: Optional[projectbadge.ProjectBadge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badge' }})
    build_batch_config: Optional[projectbuildbatchconfig.ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchConfig' }})
    cache: Optional[projectcache.ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache' }})
    concurrent_build_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentBuildLimit' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    environment: Optional[projectenvironment.ProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    file_system_locations: Optional[List[projectfilesystemlocation.ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemLocations' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logs_config: Optional[logsconfig.LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_visibility: Optional[projectvisibilitytype_enum.ProjectVisibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectVisibility' }})
    public_project_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicProjectAlias' }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedTimeoutInMinutes' }})
    resource_access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAccessRole' }})
    secondary_artifacts: Optional[List[projectartifacts.ProjectArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifacts' }})
    secondary_source_versions: Optional[List[projectsourceversion.ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourceVersions' }})
    secondary_sources: Optional[List[projectsource.ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySources' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    source: Optional[projectsource.ProjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMinutes' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    webhook: Optional[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
