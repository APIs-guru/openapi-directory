package shared

import (
	"time"
)

// StudioSummary
// Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.
type StudioSummary struct {
	AuthMode     *AuthModeEnum `json:"AuthMode,omitempty"`
	CreationTime *time.Time    `json:"CreationTime,omitempty"`
	Description  *string       `json:"Description,omitempty"`
	Name         *string       `json:"Name,omitempty"`
	StudioID     *string       `json:"StudioId,omitempty"`
	URL          *string       `json:"Url,omitempty"`
	VpcID        *string       `json:"VpcId,omitempty"`
}
