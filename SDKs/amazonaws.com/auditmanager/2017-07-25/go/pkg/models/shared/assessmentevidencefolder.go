package shared

import (
	"time"
)

type AssessmentEvidenceFolder struct {
	AssessmentID                             *string    `json:"assessmentId"`
	AssessmentReportSelectionCount           *int64     `json:"assessmentReportSelectionCount"`
	Author                                   *string    `json:"author"`
	ControlID                                *string    `json:"controlId"`
	ControlName                              *string    `json:"controlName"`
	ControlSetID                             *string    `json:"controlSetId"`
	DataSource                               *string    `json:"dataSource"`
	Date                                     *time.Time `json:"date"`
	EvidenceAwsServiceSourceCount            *int64     `json:"evidenceAwsServiceSourceCount"`
	EvidenceByTypeComplianceCheckCount       *int64     `json:"evidenceByTypeComplianceCheckCount"`
	EvidenceByTypeComplianceCheckIssuesCount *int64     `json:"evidenceByTypeComplianceCheckIssuesCount"`
	EvidenceByTypeConfigurationDataCount     *int64     `json:"evidenceByTypeConfigurationDataCount"`
	EvidenceByTypeManualCount                *int64     `json:"evidenceByTypeManualCount"`
	EvidenceByTypeUserActivityCount          *int64     `json:"evidenceByTypeUserActivityCount"`
	EvidenceResourcesIncludedCount           *int64     `json:"evidenceResourcesIncludedCount"`
	ID                                       *string    `json:"id"`
	Name                                     *string    `json:"name"`
	TotalEvidence                            *int64     `json:"totalEvidence"`
}
