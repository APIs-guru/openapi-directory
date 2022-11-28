package shared

import (
	"time"
)

// ApplicationState
// The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
type ApplicationState struct {
	ApplicationID     *string                `json:"ApplicationId,omitempty"`
	ApplicationStatus *ApplicationStatusEnum `json:"ApplicationStatus,omitempty"`
	LastUpdatedTime   *time.Time             `json:"LastUpdatedTime,omitempty"`
}
