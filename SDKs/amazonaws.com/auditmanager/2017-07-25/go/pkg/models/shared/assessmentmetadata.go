package shared

import (
	"time"
)

type AssessmentMetadata struct {
	AssessmentReportsDestination *AssessmentReportsDestination `json:"assessmentReportsDestination"`
	ComplianceType               *string                       `json:"complianceType"`
	CreationTime                 *time.Time                    `json:"creationTime"`
	Delegations                  []Delegation                  `json:"delegations"`
	Description                  *string                       `json:"description"`
	ID                           *string                       `json:"id"`
	LastUpdated                  *time.Time                    `json:"lastUpdated"`
	Name                         *string                       `json:"name"`
	Roles                        []Role                        `json:"roles"`
	Scope                        *Scope                        `json:"scope"`
	Status                       *AssessmentStatusEnum         `json:"status"`
}
