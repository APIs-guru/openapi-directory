package shared

import (
	"time"
)

// AssessmentReport
//
//	A finalized document generated from an Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment.
type AssessmentReport struct {
	AssessmentID   *string                     `json:"assessmentId,omitempty"`
	AssessmentName *string                     `json:"assessmentName,omitempty"`
	Author         *string                     `json:"author,omitempty"`
	AwsAccountID   *string                     `json:"awsAccountId,omitempty"`
	CreationTime   *time.Time                  `json:"creationTime,omitempty"`
	Description    *string                     `json:"description,omitempty"`
	ID             *string                     `json:"id,omitempty"`
	Name           *string                     `json:"name,omitempty"`
	Status         *AssessmentReportStatusEnum `json:"status,omitempty"`
}
