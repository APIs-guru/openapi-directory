package shared

// ReportGroupTrendStats
// Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
type ReportGroupTrendStats struct {
	Average *string `json:"average,omitempty"`
	Max     *string `json:"max,omitempty"`
	Min     *string `json:"min,omitempty"`
}
