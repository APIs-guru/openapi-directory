package shared

import (
	"time"
)

// ProfilingStatus
//
//	Profiling status includes information about the last time a profile agent pinged back, the last time a profile was received, and the aggregation period and start time for the most recent aggregated profile.
type ProfilingStatus struct {
	LatestAgentOrchestratedAt    *time.Time             `json:"latestAgentOrchestratedAt,omitempty"`
	LatestAgentProfileReportedAt *time.Time             `json:"latestAgentProfileReportedAt,omitempty"`
	LatestAggregatedProfile      *AggregatedProfileTime `json:"latestAggregatedProfile,omitempty"`
}
