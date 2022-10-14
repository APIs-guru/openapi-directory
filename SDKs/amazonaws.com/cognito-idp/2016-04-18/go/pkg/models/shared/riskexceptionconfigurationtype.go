package shared

type RiskExceptionConfigurationType struct {
	BlockedIPRangeList []string `json:"BlockedIPRangeList,omitempty"`
	SkippedIPRangeList []string `json:"SkippedIPRangeList,omitempty"`
}
