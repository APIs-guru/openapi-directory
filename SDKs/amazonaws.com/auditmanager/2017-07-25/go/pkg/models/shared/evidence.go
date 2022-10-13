package shared

import (
	"time"
)

type Evidence struct {
	AssessmentReportSelection *string           `json:"assessmentReportSelection"`
	Attributes                map[string]string `json:"attributes"`
	AwsAccountID              *string           `json:"awsAccountId"`
	AwsOrganization           *string           `json:"awsOrganization"`
	ComplianceCheck           *string           `json:"complianceCheck"`
	DataSource                *string           `json:"dataSource"`
	EventName                 *string           `json:"eventName"`
	EventSource               *string           `json:"eventSource"`
	EvidenceAwsAccountID      *string           `json:"evidenceAwsAccountId"`
	EvidenceByType            *string           `json:"evidenceByType"`
	EvidenceFolderID          *string           `json:"evidenceFolderId"`
	IamID                     *string           `json:"iamId"`
	ID                        *string           `json:"id"`
	ResourcesIncluded         []Resource        `json:"resourcesIncluded"`
	Time                      *time.Time        `json:"time"`
}
