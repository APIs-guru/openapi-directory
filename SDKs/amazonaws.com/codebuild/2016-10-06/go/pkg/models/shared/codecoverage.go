package shared

import (
	"time"
)

type CodeCoverage struct {
	BranchCoveragePercentage *float64   `json:"branchCoveragePercentage,omitempty"`
	BranchesCovered          *int64     `json:"branchesCovered,omitempty"`
	BranchesMissed           *int64     `json:"branchesMissed,omitempty"`
	Expired                  *time.Time `json:"expired,omitempty"`
	FilePath                 *string    `json:"filePath,omitempty"`
	ID                       *string    `json:"id,omitempty"`
	LineCoveragePercentage   *float64   `json:"lineCoveragePercentage,omitempty"`
	LinesCovered             *int64     `json:"linesCovered,omitempty"`
	LinesMissed              *int64     `json:"linesMissed,omitempty"`
	ReportArn                *string    `json:"reportARN,omitempty"`
}
