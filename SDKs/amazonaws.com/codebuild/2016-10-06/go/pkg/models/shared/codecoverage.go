package shared

import (
	"time"
)

type CodeCoverage struct {
	BranchCoveragePercentage *float64   `json:"branchCoveragePercentage"`
	BranchesCovered          *int64     `json:"branchesCovered"`
	BranchesMissed           *int64     `json:"branchesMissed"`
	Expired                  *time.Time `json:"expired"`
	FilePath                 *string    `json:"filePath"`
	ID                       *string    `json:"id"`
	LineCoveragePercentage   *float64   `json:"lineCoveragePercentage"`
	LinesCovered             *int64     `json:"linesCovered"`
	LinesMissed              *int64     `json:"linesMissed"`
	ReportArn                *string    `json:"reportARN"`
}
