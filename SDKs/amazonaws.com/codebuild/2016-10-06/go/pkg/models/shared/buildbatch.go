package shared

import (
"time")

type BuildBatch struct {
    Arn *string `json:"arn,omitempty"`
    Artifacts *BuildArtifacts `json:"artifacts,omitempty"`
    BuildBatchConfig *ProjectBuildBatchConfig `json:"buildBatchConfig,omitempty"`
    BuildBatchNumber *int64 `json:"buildBatchNumber,omitempty"`
    BuildBatchStatus *StatusTypeEnum `json:"buildBatchStatus,omitempty"`
    BuildGroups []BuildGroup `json:"buildGroups,omitempty"`
    BuildTimeoutInMinutes *int64 `json:"buildTimeoutInMinutes,omitempty"`
    Cache *ProjectCache `json:"cache,omitempty"`
    Complete *bool `json:"complete,omitempty"`
    CurrentPhase *string `json:"currentPhase,omitempty"`
    DebugSessionEnabled *bool `json:"debugSessionEnabled,omitempty"`
    EncryptionKey *string `json:"encryptionKey,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    Environment *ProjectEnvironment `json:"environment,omitempty"`
    FileSystemLocations []ProjectFileSystemLocation `json:"fileSystemLocations,omitempty"`
    ID *string `json:"id,omitempty"`
    Initiator *string `json:"initiator,omitempty"`
    LogConfig *LogsConfig `json:"logConfig,omitempty"`
    Phases []BuildBatchPhase `json:"phases,omitempty"`
    ProjectName *string `json:"projectName,omitempty"`
    QueuedTimeoutInMinutes *int64 `json:"queuedTimeoutInMinutes,omitempty"`
    ResolvedSourceVersion *string `json:"resolvedSourceVersion,omitempty"`
    SecondaryArtifacts []BuildArtifacts `json:"secondaryArtifacts,omitempty"`
    SecondarySourceVersions []ProjectSourceVersion `json:"secondarySourceVersions,omitempty"`
    SecondarySources []ProjectSource `json:"secondarySources,omitempty"`
    ServiceRole *string `json:"serviceRole,omitempty"`
    Source *ProjectSource `json:"source,omitempty"`
    SourceVersion *string `json:"sourceVersion,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    VpcConfig *VpcConfig `json:"vpcConfig,omitempty"`
    
}

