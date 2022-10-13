package shared

import (
	"time"
)

type AssessmentReport struct {
	AssessmentID   *string                     `json:"assessmentId"`
	AssessmentName *string                     `json:"assessmentName"`
	Author         *string                     `json:"author"`
	AwsAccountID   *string                     `json:"awsAccountId"`
	CreationTime   *time.Time                  `json:"creationTime"`
	Description    *string                     `json:"description"`
	ID             *string                     `json:"id"`
	Name           *string                     `json:"name"`
	Status         *AssessmentReportStatusEnum `json:"status"`
}
