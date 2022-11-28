package shared

import (
	"time"
)

// ComplianceSummary
// The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.
type ComplianceSummary struct {
	ComplianceSummaryTimestamp *time.Time                  `json:"ComplianceSummaryTimestamp,omitempty"`
	CompliantResourceCount     *ComplianceContributorCount `json:"CompliantResourceCount,omitempty"`
	NonCompliantResourceCount  *ComplianceContributorCount `json:"NonCompliantResourceCount,omitempty"`
}
