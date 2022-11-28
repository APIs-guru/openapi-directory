package shared

import (
	"time"
)

// RenewalSummary
// Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
type RenewalSummary struct {
	DomainValidationOptions []DomainValidation `json:"DomainValidationOptions"`
	RenewalStatus           RenewalStatusEnum  `json:"RenewalStatus"`
	RenewalStatusReason     *FailureReasonEnum `json:"RenewalStatusReason,omitempty"`
	UpdatedAt               time.Time          `json:"UpdatedAt"`
}
