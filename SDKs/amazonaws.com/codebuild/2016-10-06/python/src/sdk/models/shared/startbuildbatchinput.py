from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartBuildBatchInput:
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    artifacts_override: Optional[ProjectArtifacts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactsOverride') }})
    build_batch_config_override: Optional[ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchConfigOverride') }})
    build_timeout_in_minutes_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildTimeoutInMinutesOverride') }})
    buildspec_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildspecOverride') }})
    cache_override: Optional[ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheOverride') }})
    certificate_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateOverride') }})
    compute_type_override: Optional[ComputeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeTypeOverride') }})
    debug_session_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugSessionEnabled') }})
    encryption_key_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKeyOverride') }})
    environment_type_override: Optional[EnvironmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTypeOverride') }})
    environment_variables_override: Optional[List[EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariablesOverride') }})
    git_clone_depth_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCloneDepthOverride') }})
    git_submodules_config_override: Optional[GitSubmodulesConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitSubmodulesConfigOverride') }})
    image_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageOverride') }})
    image_pull_credentials_type_override: Optional[ImagePullCredentialsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullCredentialsTypeOverride') }})
    insecure_ssl_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecureSslOverride') }})
    logs_config_override: Optional[LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsConfigOverride') }})
    privileged_mode_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegedModeOverride') }})
    queued_timeout_in_minutes_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutesOverride') }})
    registry_credential_override: Optional[RegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCredentialOverride') }})
    report_build_batch_status_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBuildBatchStatusOverride') }})
    secondary_artifacts_override: Optional[List[ProjectArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifactsOverride') }})
    secondary_sources_override: Optional[List[ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourcesOverride') }})
    secondary_sources_version_override: Optional[List[ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourcesVersionOverride') }})
    service_role_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleOverride') }})
    source_auth_override: Optional[SourceAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAuthOverride') }})
    source_location_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLocationOverride') }})
    source_type_override: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTypeOverride') }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
