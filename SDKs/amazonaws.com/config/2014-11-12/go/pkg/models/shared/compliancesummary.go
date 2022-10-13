package shared

import (
	"time"
)

type ComplianceSummary struct {
	ComplianceSummaryTimestamp *time.Time                  `json:"ComplianceSummaryTimestamp"`
	CompliantResourceCount     *ComplianceContributorCount `json:"CompliantResourceCount"`
	NonCompliantResourceCount  *ComplianceContributorCount `json:"NonCompliantResourceCount"`
}
