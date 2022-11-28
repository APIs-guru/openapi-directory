package shared

import (
	"time"
)

// AuditFinding
// The findings (results) of the audit.
type AuditFinding struct {
	CheckName                  *string                   `json:"checkName,omitempty"`
	FindingID                  *string                   `json:"findingId,omitempty"`
	FindingTime                *time.Time                `json:"findingTime,omitempty"`
	IsSuppressed               *bool                     `json:"isSuppressed,omitempty"`
	NonCompliantResource       *NonCompliantResource     `json:"nonCompliantResource,omitempty"`
	ReasonForNonCompliance     *string                   `json:"reasonForNonCompliance,omitempty"`
	ReasonForNonComplianceCode *string                   `json:"reasonForNonComplianceCode,omitempty"`
	RelatedResources           []RelatedResource         `json:"relatedResources,omitempty"`
	Severity                   *AuditFindingSeverityEnum `json:"severity,omitempty"`
	TaskID                     *string                   `json:"taskId,omitempty"`
	TaskStartTime              *time.Time                `json:"taskStartTime,omitempty"`
}
