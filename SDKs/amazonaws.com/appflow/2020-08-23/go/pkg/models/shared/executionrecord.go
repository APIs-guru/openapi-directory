package shared

import (
	"time"
)

type ExecutionRecord struct {
	DataPullEndTime   *time.Time           `json:"dataPullEndTime"`
	DataPullStartTime *time.Time           `json:"dataPullStartTime"`
	ExecutionID       *string              `json:"executionId"`
	ExecutionResult   *ExecutionResult     `json:"executionResult"`
	ExecutionStatus   *ExecutionStatusEnum `json:"executionStatus"`
	LastUpdatedAt     *time.Time           `json:"lastUpdatedAt"`
	StartedAt         *time.Time           `json:"startedAt"`
}
