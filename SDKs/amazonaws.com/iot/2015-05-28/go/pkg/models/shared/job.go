package shared

import (
	"time"
)

type Job struct {
	AbortConfig                *AbortConfig                `json:"abortConfig"`
	Comment                    *string                     `json:"comment"`
	CompletedAt                *time.Time                  `json:"completedAt"`
	CreatedAt                  *time.Time                  `json:"createdAt"`
	Description                *string                     `json:"description"`
	ForceCanceled              *bool                       `json:"forceCanceled"`
	JobArn                     *string                     `json:"jobArn"`
	JobExecutionsRolloutConfig *JobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	JobID                      *string                     `json:"jobId"`
	JobProcessDetails          *JobProcessDetails          `json:"jobProcessDetails"`
	JobTemplateArn             *string                     `json:"jobTemplateArn"`
	LastUpdatedAt              *time.Time                  `json:"lastUpdatedAt"`
	NamespaceID                *string                     `json:"namespaceId"`
	PresignedURLConfig         *PresignedURLConfig         `json:"presignedUrlConfig"`
	ReasonCode                 *string                     `json:"reasonCode"`
	Status                     *JobStatusEnum              `json:"status"`
	TargetSelection            *TargetSelectionEnum        `json:"targetSelection"`
	Targets                    []string                    `json:"targets"`
	TimeoutConfig              *TimeoutConfig              `json:"timeoutConfig"`
}
