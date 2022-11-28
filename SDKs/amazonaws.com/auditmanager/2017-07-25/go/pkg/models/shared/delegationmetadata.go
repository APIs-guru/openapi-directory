package shared

import (
	"time"
)

// DelegationMetadata
//
//	The metadata associated with the specified delegation.
type DelegationMetadata struct {
	AssessmentID   *string               `json:"assessmentId,omitempty"`
	AssessmentName *string               `json:"assessmentName,omitempty"`
	ControlSetName *string               `json:"controlSetName,omitempty"`
	CreationTime   *time.Time            `json:"creationTime,omitempty"`
	ID             *string               `json:"id,omitempty"`
	RoleArn        *string               `json:"roleArn,omitempty"`
	Status         *DelegationStatusEnum `json:"status,omitempty"`
}
