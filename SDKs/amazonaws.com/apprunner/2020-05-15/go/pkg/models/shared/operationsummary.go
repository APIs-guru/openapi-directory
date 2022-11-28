package shared

import (
	"time"
)

// OperationSummary
// Provides summary information for an operation that occurred on an AWS App Runner service.
type OperationSummary struct {
	EndedAt   *time.Time           `json:"EndedAt,omitempty"`
	ID        *string              `json:"Id,omitempty"`
	StartedAt *time.Time           `json:"StartedAt,omitempty"`
	Status    *OperationStatusEnum `json:"Status,omitempty"`
	TargetArn *string              `json:"TargetArn,omitempty"`
	Type      *OperationTypeEnum   `json:"Type,omitempty"`
	UpdatedAt *time.Time           `json:"UpdatedAt,omitempty"`
}
