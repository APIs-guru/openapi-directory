package shared

type UpdateProjectInput struct {
	Artifacts               *ProjectArtifacts           `json:"artifacts"`
	BadgeEnabled            *bool                       `json:"badgeEnabled"`
	BuildBatchConfig        *ProjectBuildBatchConfig    `json:"buildBatchConfig"`
	Cache                   *ProjectCache               `json:"cache"`
	ConcurrentBuildLimit    *int64                      `json:"concurrentBuildLimit"`
	Description             *string                     `json:"description"`
	EncryptionKey           *string                     `json:"encryptionKey"`
	Environment             *ProjectEnvironment         `json:"environment"`
	FileSystemLocations     []ProjectFileSystemLocation `json:"fileSystemLocations"`
	LogsConfig              *LogsConfig                 `json:"logsConfig"`
	Name                    string                      `json:"name"`
	QueuedTimeoutInMinutes  *int64                      `json:"queuedTimeoutInMinutes"`
	SecondaryArtifacts      []ProjectArtifacts          `json:"secondaryArtifacts"`
	SecondarySourceVersions []ProjectSourceVersion      `json:"secondarySourceVersions"`
	SecondarySources        []ProjectSource             `json:"secondarySources"`
	ServiceRole             *string                     `json:"serviceRole"`
	Source                  *ProjectSource              `json:"source"`
	SourceVersion           *string                     `json:"sourceVersion"`
	Tags                    []Tag                       `json:"tags"`
	TimeoutInMinutes        *int64                      `json:"timeoutInMinutes"`
	VpcConfig               *VpcConfig                  `json:"vpcConfig"`
}
