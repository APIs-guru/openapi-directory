package shared

import (
	"time"
)

// ArchiveRuleSummary
// Contains information about an archive rule.
type ArchiveRuleSummary struct {
	CreatedAt time.Time            `json:"createdAt"`
	Filter    map[string]Criterion `json:"filter"`
	RuleName  string               `json:"ruleName"`
	UpdatedAt time.Time            `json:"updatedAt"`
}
