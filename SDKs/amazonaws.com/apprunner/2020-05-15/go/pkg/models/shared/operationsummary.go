package shared

import (
	"time"
)

type OperationSummary struct {
	EndedAt   *time.Time           `json:"EndedAt"`
	ID        *string              `json:"Id"`
	StartedAt *time.Time           `json:"StartedAt"`
	Status    *OperationStatusEnum `json:"Status"`
	TargetArn *string              `json:"TargetArn"`
	Type      *OperationTypeEnum   `json:"Type"`
	UpdatedAt *time.Time           `json:"UpdatedAt"`
}
