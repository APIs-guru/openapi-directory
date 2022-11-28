from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateProjectInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    artifacts: Optional[ProjectArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    badge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeEnabled') }})
    build_batch_config: Optional[ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchConfig') }})
    cache: Optional[ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    concurrent_build_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentBuildLimit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    environment: Optional[ProjectEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    file_system_locations: Optional[List[ProjectFileSystemLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    logs_config: Optional[LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsConfig') }})
    queued_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    secondary_artifacts: Optional[List[ProjectArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[List[ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[List[ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: Optional[ProjectSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutes') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
