package shared

// RiskExceptionConfigurationType
// The type of the configuration to override the risk decision.
type RiskExceptionConfigurationType struct {
	BlockedIPRangeList []string `json:"BlockedIPRangeList,omitempty"`
	SkippedIPRangeList []string `json:"SkippedIPRangeList,omitempty"`
}
