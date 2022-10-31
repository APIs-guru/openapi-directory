package shared

import (
	"time"
)

type ComplianceSummary struct {
	ComplianceSummaryTimestamp *time.Time                  `json:"ComplianceSummaryTimestamp,omitempty"`
	CompliantResourceCount     *ComplianceContributorCount `json:"CompliantResourceCount,omitempty"`
	NonCompliantResourceCount  *ComplianceContributorCount `json:"NonCompliantResourceCount,omitempty"`
}
