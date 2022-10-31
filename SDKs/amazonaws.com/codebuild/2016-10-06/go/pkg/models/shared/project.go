package shared

import (
"time")

type Project struct {
    Arn *string `json:"arn,omitempty"`
    Artifacts *ProjectArtifacts `json:"artifacts,omitempty"`
    Badge *ProjectBadge `json:"badge,omitempty"`
    BuildBatchConfig *ProjectBuildBatchConfig `json:"buildBatchConfig,omitempty"`
    Cache *ProjectCache `json:"cache,omitempty"`
    ConcurrentBuildLimit *int64 `json:"concurrentBuildLimit,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Environment *ProjectEnvironment `json:"environment,omitempty"`
    FileSystemLocations []ProjectFileSystemLocation `json:"fileSystemLocations,omitempty"`
    LastModified *time.Time `json:"lastModified,omitempty"`
    LogsConfig *LogsConfig `json:"logsConfig,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectVisibility *ProjectVisibilityTypeEnum `json:"projectVisibility,omitempty"`
    PublicProjectAlias *string `json:"publicProjectAlias,omitempty"`
    QueuedTimeoutInMinutes *int64 `json:"queuedTimeoutInMinutes,omitempty"`
    ResourceAccessRole *string `json:"resourceAccessRole,omitempty"`
    SecondaryArtifacts []ProjectArtifacts `json:"secondaryArtifacts,omitempty"`
    SecondarySourceVersions []ProjectSourceVersion `json:"secondarySourceVersions,omitempty"`
    SecondarySources []ProjectSource `json:"secondarySources,omitempty"`
    ServiceRole *string `json:"serviceRole,omitempty"`
    Source *ProjectSource `json:"source,omitempty"`
    SourceVersion *string `json:"sourceVersion,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    TimeoutInMinutes *int64 `json:"timeoutInMinutes,omitempty"`
    VpcConfig *VpcConfig `json:"vpcConfig,omitempty"`
    Webhook *Webhook `json:"webhook,omitempty"`
    
}

