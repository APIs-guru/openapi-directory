package shared

import (
"time")

type ProfilingStatus struct {
    LatestAgentOrchestratedAt *time.Time `json:"latestAgentOrchestratedAt,omitempty"`
    LatestAgentProfileReportedAt *time.Time `json:"latestAgentProfileReportedAt,omitempty"`
    LatestAggregatedProfile *AggregatedProfileTime `json:"latestAggregatedProfile,omitempty"`
    
}

