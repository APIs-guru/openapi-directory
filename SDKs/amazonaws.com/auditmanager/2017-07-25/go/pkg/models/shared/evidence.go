package shared

import (
	"time"
)

type Evidence struct {
	AssessmentReportSelection *string           `json:"assessmentReportSelection,omitempty"`
	Attributes                map[string]string `json:"attributes,omitempty"`
	AwsAccountID              *string           `json:"awsAccountId,omitempty"`
	AwsOrganization           *string           `json:"awsOrganization,omitempty"`
	ComplianceCheck           *string           `json:"complianceCheck,omitempty"`
	DataSource                *string           `json:"dataSource,omitempty"`
	EventName                 *string           `json:"eventName,omitempty"`
	EventSource               *string           `json:"eventSource,omitempty"`
	EvidenceAwsAccountID      *string           `json:"evidenceAwsAccountId,omitempty"`
	EvidenceByType            *string           `json:"evidenceByType,omitempty"`
	EvidenceFolderID          *string           `json:"evidenceFolderId,omitempty"`
	IamID                     *string           `json:"iamId,omitempty"`
	ID                        *string           `json:"id,omitempty"`
	ResourcesIncluded         []Resource        `json:"resourcesIncluded,omitempty"`
	Time                      *time.Time        `json:"time,omitempty"`
}
