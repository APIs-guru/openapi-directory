package shared

import (
	"time"
)

type GetQuantumTaskResponse struct {
	CreatedAt         time.Time             `json:"createdAt"`
	DeviceArn         string                `json:"deviceArn"`
	DeviceParameters  string                `json:"deviceParameters"`
	EndedAt           *time.Time            `json:"endedAt"`
	FailureReason     *string               `json:"failureReason"`
	OutputS3Bucket    string                `json:"outputS3Bucket"`
	OutputS3Directory string                `json:"outputS3Directory"`
	QuantumTaskArn    string                `json:"quantumTaskArn"`
	Shots             int64                 `json:"shots"`
	Status            QuantumTaskStatusEnum `json:"status"`
	Tags              map[string]string     `json:"tags"`
}
