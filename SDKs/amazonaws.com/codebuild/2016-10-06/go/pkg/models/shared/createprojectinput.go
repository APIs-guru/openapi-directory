package shared



type CreateProjectInput struct {
    Artifacts ProjectArtifacts `json:"artifacts"`
    BadgeEnabled *bool `json:"badgeEnabled,omitempty"`
    BuildBatchConfig *ProjectBuildBatchConfig `json:"buildBatchConfig,omitempty"`
    Cache *ProjectCache `json:"cache,omitempty"`
    ConcurrentBuildLimit *int64 `json:"concurrentBuildLimit,omitempty"`
    Description *string `json:"description,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    Environment ProjectEnvironment `json:"environment"`
    FileSystemLocations []ProjectFileSystemLocation `json:"fileSystemLocations,omitempty"`
    LogsConfig *LogsConfig `json:"logsConfig,omitempty"`
    Name string `json:"name"`
    QueuedTimeoutInMinutes *int64 `json:"queuedTimeoutInMinutes,omitempty"`
    SecondaryArtifacts []ProjectArtifacts `json:"secondaryArtifacts,omitempty"`
    SecondarySourceVersions []ProjectSourceVersion `json:"secondarySourceVersions,omitempty"`
    SecondarySources []ProjectSource `json:"secondarySources,omitempty"`
    ServiceRole string `json:"serviceRole"`
    Source ProjectSource `json:"source"`
    SourceVersion *string `json:"sourceVersion,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    TimeoutInMinutes *int64 `json:"timeoutInMinutes,omitempty"`
    VpcConfig *VpcConfig `json:"vpcConfig,omitempty"`
    
}

