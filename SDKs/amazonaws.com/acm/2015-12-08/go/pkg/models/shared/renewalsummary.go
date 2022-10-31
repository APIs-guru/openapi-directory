package shared

import (
	"time"
)

type RenewalSummary struct {
	DomainValidationOptions []DomainValidation `json:"DomainValidationOptions"`
	RenewalStatus           RenewalStatusEnum  `json:"RenewalStatus"`
	RenewalStatusReason     *FailureReasonEnum `json:"RenewalStatusReason,omitempty"`
	UpdatedAt               time.Time          `json:"UpdatedAt"`
}
