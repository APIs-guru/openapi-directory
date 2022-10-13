package shared

type RiskExceptionConfigurationType struct {
	BlockedIPRangeList []string `json:"BlockedIPRangeList"`
	SkippedIPRangeList []string `json:"SkippedIPRangeList"`
}
