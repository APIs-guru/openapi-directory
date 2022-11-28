package shared

import (
	"time"
)

// EndpointProperties
// Specifies information about the specified endpoint.
type EndpointProperties struct {
	CreationTime          *time.Time          `json:"CreationTime,omitempty"`
	CurrentInferenceUnits *int64              `json:"CurrentInferenceUnits,omitempty"`
	DataAccessRoleArn     *string             `json:"DataAccessRoleArn,omitempty"`
	DesiredInferenceUnits *int64              `json:"DesiredInferenceUnits,omitempty"`
	EndpointArn           *string             `json:"EndpointArn,omitempty"`
	LastModifiedTime      *time.Time          `json:"LastModifiedTime,omitempty"`
	Message               *string             `json:"Message,omitempty"`
	ModelArn              *string             `json:"ModelArn,omitempty"`
	Status                *EndpointStatusEnum `json:"Status,omitempty"`
}
