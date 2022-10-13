package shared

import (
	"time"
)

type Delegation struct {
	AssessmentID   *string               `json:"assessmentId"`
	AssessmentName *string               `json:"assessmentName"`
	Comment        *string               `json:"comment"`
	ControlSetID   *string               `json:"controlSetId"`
	CreatedBy      *string               `json:"createdBy"`
	CreationTime   *time.Time            `json:"creationTime"`
	ID             *string               `json:"id"`
	LastUpdated    *time.Time            `json:"lastUpdated"`
	RoleArn        *string               `json:"roleArn"`
	RoleType       *RoleTypeEnum         `json:"roleType"`
	Status         *DelegationStatusEnum `json:"status"`
}
