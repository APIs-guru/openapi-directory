package shared

import (
	"time"
)

type OperationSummary struct {
	EndedAt   *time.Time           `json:"EndedAt,omitempty"`
	ID        *string              `json:"Id,omitempty"`
	StartedAt *time.Time           `json:"StartedAt,omitempty"`
	Status    *OperationStatusEnum `json:"Status,omitempty"`
	TargetArn *string              `json:"TargetArn,omitempty"`
	Type      *OperationTypeEnum   `json:"Type,omitempty"`
	UpdatedAt *time.Time           `json:"UpdatedAt,omitempty"`
}
