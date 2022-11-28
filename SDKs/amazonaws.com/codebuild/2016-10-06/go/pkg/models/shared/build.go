package shared

import (
	"time"
)

// Build
// Information about a build.
type Build struct {
	Arn                          *string                       `json:"arn,omitempty"`
	Artifacts                    *BuildArtifacts               `json:"artifacts,omitempty"`
	BuildBatchArn                *string                       `json:"buildBatchArn,omitempty"`
	BuildComplete                *bool                         `json:"buildComplete,omitempty"`
	BuildNumber                  *int64                        `json:"buildNumber,omitempty"`
	BuildStatus                  *StatusTypeEnum               `json:"buildStatus,omitempty"`
	Cache                        *ProjectCache                 `json:"cache,omitempty"`
	CurrentPhase                 *string                       `json:"currentPhase,omitempty"`
	DebugSession                 *DebugSession                 `json:"debugSession,omitempty"`
	EncryptionKey                *string                       `json:"encryptionKey,omitempty"`
	EndTime                      *time.Time                    `json:"endTime,omitempty"`
	Environment                  *ProjectEnvironment           `json:"environment,omitempty"`
	ExportedEnvironmentVariables []ExportedEnvironmentVariable `json:"exportedEnvironmentVariables,omitempty"`
	FileSystemLocations          []ProjectFileSystemLocation   `json:"fileSystemLocations,omitempty"`
	ID                           *string                       `json:"id,omitempty"`
	Initiator                    *string                       `json:"initiator,omitempty"`
	Logs                         *LogsLocation                 `json:"logs,omitempty"`
	NetworkInterface             *NetworkInterface             `json:"networkInterface,omitempty"`
	Phases                       []BuildPhase                  `json:"phases,omitempty"`
	ProjectName                  *string                       `json:"projectName,omitempty"`
	QueuedTimeoutInMinutes       *int64                        `json:"queuedTimeoutInMinutes,omitempty"`
	ReportArns                   []string                      `json:"reportArns,omitempty"`
	ResolvedSourceVersion        *string                       `json:"resolvedSourceVersion,omitempty"`
	SecondaryArtifacts           []BuildArtifacts              `json:"secondaryArtifacts,omitempty"`
	SecondarySourceVersions      []ProjectSourceVersion        `json:"secondarySourceVersions,omitempty"`
	SecondarySources             []ProjectSource               `json:"secondarySources,omitempty"`
	ServiceRole                  *string                       `json:"serviceRole,omitempty"`
	Source                       *ProjectSource                `json:"source,omitempty"`
	SourceVersion                *string                       `json:"sourceVersion,omitempty"`
	StartTime                    *time.Time                    `json:"startTime,omitempty"`
	TimeoutInMinutes             *int64                        `json:"timeoutInMinutes,omitempty"`
	VpcConfig                    *VpcConfig                    `json:"vpcConfig,omitempty"`
}
