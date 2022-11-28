package shared

import (
	"time"
)

// ExecutionRecord
//
//	Specifies information about the past flow run instances for a given flow.
type ExecutionRecord struct {
	DataPullEndTime   *time.Time           `json:"dataPullEndTime,omitempty"`
	DataPullStartTime *time.Time           `json:"dataPullStartTime,omitempty"`
	ExecutionID       *string              `json:"executionId,omitempty"`
	ExecutionResult   *ExecutionResult     `json:"executionResult,omitempty"`
	ExecutionStatus   *ExecutionStatusEnum `json:"executionStatus,omitempty"`
	LastUpdatedAt     *time.Time           `json:"lastUpdatedAt,omitempty"`
	StartedAt         *time.Time           `json:"startedAt,omitempty"`
}
