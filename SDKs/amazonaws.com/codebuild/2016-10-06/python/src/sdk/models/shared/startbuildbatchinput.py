from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import projectartifacts
from . import projectbuildbatchconfig
from . import projectcache
from . import computetype_enum
from . import environmenttype_enum
from . import environmentvariable
from . import gitsubmodulesconfig
from . import imagepullcredentialstype_enum
from . import logsconfig
from . import registrycredential
from . import projectartifacts
from . import projectsource
from . import projectsourceversion
from . import sourceauth
from . import sourcetype_enum


@dataclass_json
@dataclass
class StartBuildBatchInput:
    artifacts_override: Optional[projectartifacts.ProjectArtifacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactsOverride' }})
    build_batch_config_override: Optional[projectbuildbatchconfig.ProjectBuildBatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchConfigOverride' }})
    build_timeout_in_minutes_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildTimeoutInMinutesOverride' }})
    buildspec_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildspecOverride' }})
    cache_override: Optional[projectcache.ProjectCache] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheOverride' }})
    certificate_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateOverride' }})
    compute_type_override: Optional[computetype_enum.ComputeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeTypeOverride' }})
    debug_session_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugSessionEnabled' }})
    encryption_key_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKeyOverride' }})
    environment_type_override: Optional[environmenttype_enum.EnvironmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTypeOverride' }})
    environment_variables_override: Optional[List[environmentvariable.EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariablesOverride' }})
    git_clone_depth_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitCloneDepthOverride' }})
    git_submodules_config_override: Optional[gitsubmodulesconfig.GitSubmodulesConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitSubmodulesConfigOverride' }})
    image_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageOverride' }})
    image_pull_credentials_type_override: Optional[imagepullcredentialstype_enum.ImagePullCredentialsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePullCredentialsTypeOverride' }})
    insecure_ssl_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecureSslOverride' }})
    logs_config_override: Optional[logsconfig.LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logsConfigOverride' }})
    privileged_mode_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privilegedModeOverride' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectName' }})
    queued_timeout_in_minutes_override: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queuedTimeoutInMinutesOverride' }})
    registry_credential_override: Optional[registrycredential.RegistryCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryCredentialOverride' }})
    report_build_batch_status_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportBuildBatchStatusOverride' }})
    secondary_artifacts_override: Optional[List[projectartifacts.ProjectArtifacts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifactsOverride' }})
    secondary_sources_override: Optional[List[projectsource.ProjectSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourcesOverride' }})
    secondary_sources_version_override: Optional[List[projectsourceversion.ProjectSourceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondarySourcesVersionOverride' }})
    service_role_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRoleOverride' }})
    source_auth_override: Optional[sourceauth.SourceAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAuthOverride' }})
    source_location_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceLocationOverride' }})
    source_type_override: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceTypeOverride' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    
