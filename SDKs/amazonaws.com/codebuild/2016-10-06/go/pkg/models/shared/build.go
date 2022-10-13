package shared

import (
	"time"
)

type Build struct {
	Arn                          *string                       `json:"arn"`
	Artifacts                    *BuildArtifacts               `json:"artifacts"`
	BuildBatchArn                *string                       `json:"buildBatchArn"`
	BuildComplete                *bool                         `json:"buildComplete"`
	BuildNumber                  *int64                        `json:"buildNumber"`
	BuildStatus                  *StatusTypeEnum               `json:"buildStatus"`
	Cache                        *ProjectCache                 `json:"cache"`
	CurrentPhase                 *string                       `json:"currentPhase"`
	DebugSession                 *DebugSession                 `json:"debugSession"`
	EncryptionKey                *string                       `json:"encryptionKey"`
	EndTime                      *time.Time                    `json:"endTime"`
	Environment                  *ProjectEnvironment           `json:"environment"`
	ExportedEnvironmentVariables []ExportedEnvironmentVariable `json:"exportedEnvironmentVariables"`
	FileSystemLocations          []ProjectFileSystemLocation   `json:"fileSystemLocations"`
	ID                           *string                       `json:"id"`
	Initiator                    *string                       `json:"initiator"`
	Logs                         *LogsLocation                 `json:"logs"`
	NetworkInterface             *NetworkInterface             `json:"networkInterface"`
	Phases                       []BuildPhase                  `json:"phases"`
	ProjectName                  *string                       `json:"projectName"`
	QueuedTimeoutInMinutes       *int64                        `json:"queuedTimeoutInMinutes"`
	ReportArns                   []string                      `json:"reportArns"`
	ResolvedSourceVersion        *string                       `json:"resolvedSourceVersion"`
	SecondaryArtifacts           []BuildArtifacts              `json:"secondaryArtifacts"`
	SecondarySourceVersions      []ProjectSourceVersion        `json:"secondarySourceVersions"`
	SecondarySources             []ProjectSource               `json:"secondarySources"`
	ServiceRole                  *string                       `json:"serviceRole"`
	Source                       *ProjectSource                `json:"source"`
	SourceVersion                *string                       `json:"sourceVersion"`
	StartTime                    *time.Time                    `json:"startTime"`
	TimeoutInMinutes             *int64                        `json:"timeoutInMinutes"`
	VpcConfig                    *VpcConfig                    `json:"vpcConfig"`
}
