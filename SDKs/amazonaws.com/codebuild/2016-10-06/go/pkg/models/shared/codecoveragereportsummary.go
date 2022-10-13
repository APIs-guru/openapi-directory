package shared

type CodeCoverageReportSummary struct {
	BranchCoveragePercentage *float64 `json:"branchCoveragePercentage"`
	BranchesCovered          *int64   `json:"branchesCovered"`
	BranchesMissed           *int64   `json:"branchesMissed"`
	LineCoveragePercentage   *float64 `json:"lineCoveragePercentage"`
	LinesCovered             *int64   `json:"linesCovered"`
	LinesMissed              *int64   `json:"linesMissed"`
}
