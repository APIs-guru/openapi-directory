package shared

// CodeCoverageReportSummary
// <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
type CodeCoverageReportSummary struct {
	BranchCoveragePercentage *float64 `json:"branchCoveragePercentage,omitempty"`
	BranchesCovered          *int64   `json:"branchesCovered,omitempty"`
	BranchesMissed           *int64   `json:"branchesMissed,omitempty"`
	LineCoveragePercentage   *float64 `json:"lineCoveragePercentage,omitempty"`
	LinesCovered             *int64   `json:"linesCovered,omitempty"`
	LinesMissed              *int64   `json:"linesMissed,omitempty"`
}
