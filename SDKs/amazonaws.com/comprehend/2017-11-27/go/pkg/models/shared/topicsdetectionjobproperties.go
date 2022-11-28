package shared

import (
	"time"
)

// TopicsDetectionJobProperties
// Provides information about a topic detection job.
type TopicsDetectionJobProperties struct {
	DataAccessRoleArn *string           `json:"DataAccessRoleArn,omitempty"`
	EndTime           *time.Time        `json:"EndTime,omitempty"`
	InputDataConfig   *InputDataConfig  `json:"InputDataConfig,omitempty"`
	JobArn            *string           `json:"JobArn,omitempty"`
	JobID             *string           `json:"JobId,omitempty"`
	JobName           *string           `json:"JobName,omitempty"`
	JobStatus         *JobStatusEnum    `json:"JobStatus,omitempty"`
	Message           *string           `json:"Message,omitempty"`
	NumberOfTopics    *int64            `json:"NumberOfTopics,omitempty"`
	OutputDataConfig  *OutputDataConfig `json:"OutputDataConfig,omitempty"`
	SubmitTime        *time.Time        `json:"SubmitTime,omitempty"`
	VolumeKmsKeyID    *string           `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig         *VpcConfig        `json:"VpcConfig,omitempty"`
}
