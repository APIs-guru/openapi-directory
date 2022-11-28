package shared

import (
	"time"
)

// AssessmentEvidenceFolder
//
//	The folder in which Audit Manager stores evidence for an assessment.
type AssessmentEvidenceFolder struct {
	AssessmentID                             *string    `json:"assessmentId,omitempty"`
	AssessmentReportSelectionCount           *int64     `json:"assessmentReportSelectionCount,omitempty"`
	Author                                   *string    `json:"author,omitempty"`
	ControlID                                *string    `json:"controlId,omitempty"`
	ControlName                              *string    `json:"controlName,omitempty"`
	ControlSetID                             *string    `json:"controlSetId,omitempty"`
	DataSource                               *string    `json:"dataSource,omitempty"`
	Date                                     *time.Time `json:"date,omitempty"`
	EvidenceAwsServiceSourceCount            *int64     `json:"evidenceAwsServiceSourceCount,omitempty"`
	EvidenceByTypeComplianceCheckCount       *int64     `json:"evidenceByTypeComplianceCheckCount,omitempty"`
	EvidenceByTypeComplianceCheckIssuesCount *int64     `json:"evidenceByTypeComplianceCheckIssuesCount,omitempty"`
	EvidenceByTypeConfigurationDataCount     *int64     `json:"evidenceByTypeConfigurationDataCount,omitempty"`
	EvidenceByTypeManualCount                *int64     `json:"evidenceByTypeManualCount,omitempty"`
	EvidenceByTypeUserActivityCount          *int64     `json:"evidenceByTypeUserActivityCount,omitempty"`
	EvidenceResourcesIncludedCount           *int64     `json:"evidenceResourcesIncludedCount,omitempty"`
	ID                                       *string    `json:"id,omitempty"`
	Name                                     *string    `json:"name,omitempty"`
	TotalEvidence                            *int64     `json:"totalEvidence,omitempty"`
}
