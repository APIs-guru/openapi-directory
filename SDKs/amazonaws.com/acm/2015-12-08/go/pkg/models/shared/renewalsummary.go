package shared

import (
	"time"
)

type RenewalSummary struct {
	DomainValidationOptions []DomainValidation `json:"DomainValidationOptions"`
	RenewalStatus           RenewalStatusEnum  `json:"RenewalStatus"`
	RenewalStatusReason     *FailureReasonEnum `json:"RenewalStatusReason"`
	UpdatedAt               time.Time          `json:"UpdatedAt"`
}
