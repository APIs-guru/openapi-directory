package shared

import (
	"time"
)

// AssessmentMetadataItem
//
//	A metadata object associated with an assessment in Audit Manager.
type AssessmentMetadataItem struct {
	ComplianceType *string               `json:"complianceType,omitempty"`
	CreationTime   *time.Time            `json:"creationTime,omitempty"`
	Delegations    []Delegation          `json:"delegations,omitempty"`
	ID             *string               `json:"id,omitempty"`
	LastUpdated    *time.Time            `json:"lastUpdated,omitempty"`
	Name           *string               `json:"name,omitempty"`
	Roles          []Role                `json:"roles,omitempty"`
	Status         *AssessmentStatusEnum `json:"status,omitempty"`
}
