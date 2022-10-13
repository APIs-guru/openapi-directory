from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buildartifacts
from . import statustype_enum
from . import projectcache
from . import debugsession
from . import projectenvironment
from . import exportedenvironmentvariable
from . import projectfilesystemlocation
from . import logslocation
from . import networkinterface
from . import buildphase
from . import buildartifacts
from . import projectsourceversion
from . import projectsource
from . import projectsource
from . import vpcconfig


@dataclass_json
@dataclass
class Build:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    artifacts: Optional[buildartifacts.BuildArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    build_batch_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchArn' }})
    build_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildComplete' }})
    build_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildNumber' }})
    build_status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStatus' }})
    cache: Optional[projectcache.ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cache' }})
    current_phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPhase' }})
    debug_session: Optional[debugsession.DebugSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugSession' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[projectenvironment.ProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    exported_environment_variables: Optional[List[exportedenvironmentvariable.ExportedEnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportedEnvironmentVariables' }})
    file_system_locations: Optional[List[projectfilesystemlocation.ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSystemLocations' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiator' }})
    logs: Optional[logslocation.LogsLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    network_interface: Optional[networkinterface.NetworkInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterface' }})
    phases: Optional[List[buildphase.BuildPhase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phases' }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedTimeoutInMinutes' }})
    report_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportArns' }})
    resolved_source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedSourceVersion' }})
    secondary_artifacts: Optional[List[buildartifacts.BuildArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifacts' }})
    secondary_source_versions: Optional[List[projectsourceversion.ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourceVersions' }})
    secondary_sources: Optional[List[projectsource.ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySources' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    source: Optional[projectsource.ProjectSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMinutes' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
