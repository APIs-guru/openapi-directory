from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildartifacts
from . import projectbuildbatchconfig
from . import statustype_enum
from . import buildgroup
from . import projectcache
from . import projectenvironment
from . import projectfilesystemlocation
from . import logsconfig
from . import buildbatchphase
from . import buildartifacts
from . import projectsourceversion
from . import projectsource
from . import projectsource
from . import vpcconfig


@dataclass_json
@dataclass
class BuildBatch:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    artifacts: Optional[buildartifacts.BuildArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    build_batch_config: Optional[projectbuildbatchconfig.ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchConfig' }})
    build_batch_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchNumber' }})
    build_batch_status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchStatus' }})
    build_groups: Optional[List[buildgroup.BuildGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildGroups' }})
    build_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildTimeoutInMinutes' }})
    cache: Optional[projectcache.ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache' }})
    complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complete' }})
    current_phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPhase' }})
    debug_session_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugSessionEnabled' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[projectenvironment.ProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    file_system_locations: Optional[List[projectfilesystemlocation.ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemLocations' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiator' }})
    log_config: Optional[logsconfig.LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfig' }})
    phases: Optional[List[buildbatchphase.BuildBatchPhase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phases' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedTimeoutInMinutes' }})
    resolved_source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedSourceVersion' }})
    secondary_artifacts: Optional[List[buildartifacts.BuildArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifacts' }})
    secondary_source_versions: Optional[List[projectsourceversion.ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourceVersions' }})
    secondary_sources: Optional[List[projectsource.ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySources' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    source: Optional[projectsource.ProjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
