package shared

import (
	"time"
)

type TopicsDetectionJobProperties struct {
	DataAccessRoleArn *string           `json:"DataAccessRoleArn"`
	EndTime           *time.Time        `json:"EndTime"`
	InputDataConfig   *InputDataConfig  `json:"InputDataConfig"`
	JobArn            *string           `json:"JobArn"`
	JobID             *string           `json:"JobId"`
	JobName           *string           `json:"JobName"`
	JobStatus         *JobStatusEnum    `json:"JobStatus"`
	Message           *string           `json:"Message"`
	NumberOfTopics    *int64            `json:"NumberOfTopics"`
	OutputDataConfig  *OutputDataConfig `json:"OutputDataConfig"`
	SubmitTime        *time.Time        `json:"SubmitTime"`
	VolumeKmsKeyID    *string           `json:"VolumeKmsKeyId"`
	VpcConfig         *VpcConfig        `json:"VpcConfig"`
}
