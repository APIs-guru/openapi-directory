package shared

import (
	"time"
)

type AuditFinding struct {
	CheckName                  *string                   `json:"checkName"`
	FindingID                  *string                   `json:"findingId"`
	FindingTime                *time.Time                `json:"findingTime"`
	IsSuppressed               *bool                     `json:"isSuppressed"`
	NonCompliantResource       *NonCompliantResource     `json:"nonCompliantResource"`
	ReasonForNonCompliance     *string                   `json:"reasonForNonCompliance"`
	ReasonForNonComplianceCode *string                   `json:"reasonForNonComplianceCode"`
	RelatedResources           []RelatedResource         `json:"relatedResources"`
	Severity                   *AuditFindingSeverityEnum `json:"severity"`
	TaskID                     *string                   `json:"taskId"`
	TaskStartTime              *time.Time                `json:"taskStartTime"`
}
