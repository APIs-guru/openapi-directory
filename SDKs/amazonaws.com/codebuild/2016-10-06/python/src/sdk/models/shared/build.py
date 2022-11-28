from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Build:
    r"""Build
    Information about a build.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    artifacts: Optional[BuildArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    build_batch_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchArn') }})
    build_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildComplete') }})
    build_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildNumber') }})
    build_status: Optional[StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatus') }})
    cache: Optional[ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    current_phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPhase') }})
    debug_session: Optional[DebugSession] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugSession') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[ProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    exported_environment_variables: Optional[List[ExportedEnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportedEnvironmentVariables') }})
    file_system_locations: Optional[List[ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    logs: Optional[LogsLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    network_interface: Optional[NetworkInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterface') }})
    phases: Optional[List[BuildPhase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    project_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    report_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportArns') }})
    resolved_source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedSourceVersion') }})
    secondary_artifacts: Optional[List[BuildArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[List[ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[List[ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: Optional[ProjectSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutes') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
