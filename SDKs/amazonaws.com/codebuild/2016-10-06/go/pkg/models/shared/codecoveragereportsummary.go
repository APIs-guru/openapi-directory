package shared

type CodeCoverageReportSummary struct {
	BranchCoveragePercentage *float64 `json:"branchCoveragePercentage,omitempty"`
	BranchesCovered          *int64   `json:"branchesCovered,omitempty"`
	BranchesMissed           *int64   `json:"branchesMissed,omitempty"`
	LineCoveragePercentage   *float64 `json:"lineCoveragePercentage,omitempty"`
	LinesCovered             *int64   `json:"linesCovered,omitempty"`
	LinesMissed              *int64   `json:"linesMissed,omitempty"`
}
