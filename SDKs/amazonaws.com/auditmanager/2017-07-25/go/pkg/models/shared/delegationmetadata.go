package shared

import (
	"time"
)

type DelegationMetadata struct {
	AssessmentID   *string               `json:"assessmentId"`
	AssessmentName *string               `json:"assessmentName"`
	ControlSetName *string               `json:"controlSetName"`
	CreationTime   *time.Time            `json:"creationTime"`
	ID             *string               `json:"id"`
	RoleArn        *string               `json:"roleArn"`
	Status         *DelegationStatusEnum `json:"status"`
}
