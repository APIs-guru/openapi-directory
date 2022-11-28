package shared

import (
	"time"
)

// NetworkInsightsAnalysis
// Describes a network insights analysis.
type NetworkInsightsAnalysis struct {
	AlternatePathHints         []AlternatePathHint
	Explanations               []Explanation
	FilterInArns               []string
	ForwardPathComponents      []PathComponent
	NetworkInsightsAnalysisArn *string
	NetworkInsightsAnalysisID  *string
	NetworkInsightsPathID      *string
	NetworkPathFound           *bool
	ReturnPathComponents       []PathComponent
	StartDate                  *time.Time
	Status                     *AnalysisStatusEnum
	StatusMessage              *string
	Tags                       []Tag
}
