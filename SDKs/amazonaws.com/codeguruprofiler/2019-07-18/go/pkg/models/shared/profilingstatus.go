package shared

import (
	"time"
)

type ProfilingStatus struct {
	LatestAgentOrchestratedAt    *time.Time             `json:"latestAgentOrchestratedAt"`
	LatestAgentProfileReportedAt *time.Time             `json:"latestAgentProfileReportedAt"`
	LatestAggregatedProfile      *AggregatedProfileTime `json:"latestAggregatedProfile"`
}
