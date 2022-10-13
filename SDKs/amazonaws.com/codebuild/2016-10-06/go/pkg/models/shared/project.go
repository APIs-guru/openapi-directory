package shared

import (
	"time"
)

type Project struct {
	Arn                     *string                     `json:"arn"`
	Artifacts               *ProjectArtifacts           `json:"artifacts"`
	Badge                   *ProjectBadge               `json:"badge"`
	BuildBatchConfig        *ProjectBuildBatchConfig    `json:"buildBatchConfig"`
	Cache                   *ProjectCache               `json:"cache"`
	ConcurrentBuildLimit    *int64                      `json:"concurrentBuildLimit"`
	Created                 *time.Time                  `json:"created"`
	Description             *string                     `json:"description"`
	EncryptionKey           *string                     `json:"encryptionKey"`
	Environment             *ProjectEnvironment         `json:"environment"`
	FileSystemLocations     []ProjectFileSystemLocation `json:"fileSystemLocations"`
	LastModified            *time.Time                  `json:"lastModified"`
	LogsConfig              *LogsConfig                 `json:"logsConfig"`
	Name                    *string                     `json:"name"`
	ProjectVisibility       *ProjectVisibilityTypeEnum  `json:"projectVisibility"`
	PublicProjectAlias      *string                     `json:"publicProjectAlias"`
	QueuedTimeoutInMinutes  *int64                      `json:"queuedTimeoutInMinutes"`
	ResourceAccessRole      *string                     `json:"resourceAccessRole"`
	SecondaryArtifacts      []ProjectArtifacts          `json:"secondaryArtifacts"`
	SecondarySourceVersions []ProjectSourceVersion      `json:"secondarySourceVersions"`
	SecondarySources        []ProjectSource             `json:"secondarySources"`
	ServiceRole             *string                     `json:"serviceRole"`
	Source                  *ProjectSource              `json:"source"`
	SourceVersion           *string                     `json:"sourceVersion"`
	Tags                    []Tag                       `json:"tags"`
	TimeoutInMinutes        *int64                      `json:"timeoutInMinutes"`
	VpcConfig               *VpcConfig                  `json:"vpcConfig"`
	Webhook                 *Webhook                    `json:"webhook"`
}
