package shared

type StartBuildInput struct {
	ArtifactsOverride                *ProjectArtifacts             `json:"artifactsOverride,omitempty"`
	BuildStatusConfigOverride        *BuildStatusConfig            `json:"buildStatusConfigOverride,omitempty"`
	BuildspecOverride                *string                       `json:"buildspecOverride,omitempty"`
	CacheOverride                    *ProjectCache                 `json:"cacheOverride,omitempty"`
	CertificateOverride              *string                       `json:"certificateOverride,omitempty"`
	ComputeTypeOverride              *ComputeTypeEnum              `json:"computeTypeOverride,omitempty"`
	DebugSessionEnabled              *bool                         `json:"debugSessionEnabled,omitempty"`
	EncryptionKeyOverride            *string                       `json:"encryptionKeyOverride,omitempty"`
	EnvironmentTypeOverride          *EnvironmentTypeEnum          `json:"environmentTypeOverride,omitempty"`
	EnvironmentVariablesOverride     []EnvironmentVariable         `json:"environmentVariablesOverride,omitempty"`
	GitCloneDepthOverride            *int64                        `json:"gitCloneDepthOverride,omitempty"`
	GitSubmodulesConfigOverride      *GitSubmodulesConfig          `json:"gitSubmodulesConfigOverride,omitempty"`
	ImageOverride                    *string                       `json:"imageOverride,omitempty"`
	ImagePullCredentialsTypeOverride *ImagePullCredentialsTypeEnum `json:"imagePullCredentialsTypeOverride,omitempty"`
	InsecureSslOverride              *bool                         `json:"insecureSslOverride,omitempty"`
	LogsConfigOverride               *LogsConfig                   `json:"logsConfigOverride,omitempty"`
	PrivilegedModeOverride           *bool                         `json:"privilegedModeOverride,omitempty"`
	ProjectName                      string                        `json:"projectName"`
	QueuedTimeoutInMinutesOverride   *int64                        `json:"queuedTimeoutInMinutesOverride,omitempty"`
	RegistryCredentialOverride       *RegistryCredential           `json:"registryCredentialOverride,omitempty"`
	ReportBuildStatusOverride        *bool                         `json:"reportBuildStatusOverride,omitempty"`
	SecondaryArtifactsOverride       []ProjectArtifacts            `json:"secondaryArtifactsOverride,omitempty"`
	SecondarySourcesOverride         []ProjectSource               `json:"secondarySourcesOverride,omitempty"`
	SecondarySourcesVersionOverride  []ProjectSourceVersion        `json:"secondarySourcesVersionOverride,omitempty"`
	ServiceRoleOverride              *string                       `json:"serviceRoleOverride,omitempty"`
	SourceAuthOverride               *SourceAuth                   `json:"sourceAuthOverride,omitempty"`
	SourceLocationOverride           *string                       `json:"sourceLocationOverride,omitempty"`
	SourceTypeOverride               *SourceTypeEnum               `json:"sourceTypeOverride,omitempty"`
	SourceVersion                    *string                       `json:"sourceVersion,omitempty"`
	TimeoutInMinutesOverride         *int64                        `json:"timeoutInMinutesOverride,omitempty"`
}
