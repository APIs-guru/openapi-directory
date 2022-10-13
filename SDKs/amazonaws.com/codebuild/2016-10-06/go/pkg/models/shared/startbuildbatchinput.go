package shared

type StartBuildBatchInput struct {
	ArtifactsOverride                *ProjectArtifacts             `json:"artifactsOverride"`
	BuildBatchConfigOverride         *ProjectBuildBatchConfig      `json:"buildBatchConfigOverride"`
	BuildTimeoutInMinutesOverride    *int64                        `json:"buildTimeoutInMinutesOverride"`
	BuildspecOverride                *string                       `json:"buildspecOverride"`
	CacheOverride                    *ProjectCache                 `json:"cacheOverride"`
	CertificateOverride              *string                       `json:"certificateOverride"`
	ComputeTypeOverride              *ComputeTypeEnum              `json:"computeTypeOverride"`
	DebugSessionEnabled              *bool                         `json:"debugSessionEnabled"`
	EncryptionKeyOverride            *string                       `json:"encryptionKeyOverride"`
	EnvironmentTypeOverride          *EnvironmentTypeEnum          `json:"environmentTypeOverride"`
	EnvironmentVariablesOverride     []EnvironmentVariable         `json:"environmentVariablesOverride"`
	GitCloneDepthOverride            *int64                        `json:"gitCloneDepthOverride"`
	GitSubmodulesConfigOverride      *GitSubmodulesConfig          `json:"gitSubmodulesConfigOverride"`
	ImageOverride                    *string                       `json:"imageOverride"`
	ImagePullCredentialsTypeOverride *ImagePullCredentialsTypeEnum `json:"imagePullCredentialsTypeOverride"`
	InsecureSslOverride              *bool                         `json:"insecureSslOverride"`
	LogsConfigOverride               *LogsConfig                   `json:"logsConfigOverride"`
	PrivilegedModeOverride           *bool                         `json:"privilegedModeOverride"`
	ProjectName                      string                        `json:"projectName"`
	QueuedTimeoutInMinutesOverride   *int64                        `json:"queuedTimeoutInMinutesOverride"`
	RegistryCredentialOverride       *RegistryCredential           `json:"registryCredentialOverride"`
	ReportBuildBatchStatusOverride   *bool                         `json:"reportBuildBatchStatusOverride"`
	SecondaryArtifactsOverride       []ProjectArtifacts            `json:"secondaryArtifactsOverride"`
	SecondarySourcesOverride         []ProjectSource               `json:"secondarySourcesOverride"`
	SecondarySourcesVersionOverride  []ProjectSourceVersion        `json:"secondarySourcesVersionOverride"`
	ServiceRoleOverride              *string                       `json:"serviceRoleOverride"`
	SourceAuthOverride               *SourceAuth                   `json:"sourceAuthOverride"`
	SourceLocationOverride           *string                       `json:"sourceLocationOverride"`
	SourceTypeOverride               *SourceTypeEnum               `json:"sourceTypeOverride"`
	SourceVersion                    *string                       `json:"sourceVersion"`
}
