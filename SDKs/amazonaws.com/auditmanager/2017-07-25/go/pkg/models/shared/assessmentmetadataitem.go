package shared

import (
	"time"
)

type AssessmentMetadataItem struct {
	ComplianceType *string               `json:"complianceType"`
	CreationTime   *time.Time            `json:"creationTime"`
	Delegations    []Delegation          `json:"delegations"`
	ID             *string               `json:"id"`
	LastUpdated    *time.Time            `json:"lastUpdated"`
	Name           *string               `json:"name"`
	Roles          []Role                `json:"roles"`
	Status         *AssessmentStatusEnum `json:"status"`
}
