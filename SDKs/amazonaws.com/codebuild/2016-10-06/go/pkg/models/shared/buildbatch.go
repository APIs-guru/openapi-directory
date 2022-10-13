package shared

import (
	"time"
)

type BuildBatch struct {
	Arn                     *string                     `json:"arn"`
	Artifacts               *BuildArtifacts             `json:"artifacts"`
	BuildBatchConfig        *ProjectBuildBatchConfig    `json:"buildBatchConfig"`
	BuildBatchNumber        *int64                      `json:"buildBatchNumber"`
	BuildBatchStatus        *StatusTypeEnum             `json:"buildBatchStatus"`
	BuildGroups             []BuildGroup                `json:"buildGroups"`
	BuildTimeoutInMinutes   *int64                      `json:"buildTimeoutInMinutes"`
	Cache                   *ProjectCache               `json:"cache"`
	Complete                *bool                       `json:"complete"`
	CurrentPhase            *string                     `json:"currentPhase"`
	DebugSessionEnabled     *bool                       `json:"debugSessionEnabled"`
	EncryptionKey           *string                     `json:"encryptionKey"`
	EndTime                 *time.Time                  `json:"endTime"`
	Environment             *ProjectEnvironment         `json:"environment"`
	FileSystemLocations     []ProjectFileSystemLocation `json:"fileSystemLocations"`
	ID                      *string                     `json:"id"`
	Initiator               *string                     `json:"initiator"`
	LogConfig               *LogsConfig                 `json:"logConfig"`
	Phases                  []BuildBatchPhase           `json:"phases"`
	ProjectName             *string                     `json:"projectName"`
	QueuedTimeoutInMinutes  *int64                      `json:"queuedTimeoutInMinutes"`
	ResolvedSourceVersion   *string                     `json:"resolvedSourceVersion"`
	SecondaryArtifacts      []BuildArtifacts            `json:"secondaryArtifacts"`
	SecondarySourceVersions []ProjectSourceVersion      `json:"secondarySourceVersions"`
	SecondarySources        []ProjectSource             `json:"secondarySources"`
	ServiceRole             *string                     `json:"serviceRole"`
	Source                  *ProjectSource              `json:"source"`
	SourceVersion           *string                     `json:"sourceVersion"`
	StartTime               *time.Time                  `json:"startTime"`
	VpcConfig               *VpcConfig                  `json:"vpcConfig"`
}
