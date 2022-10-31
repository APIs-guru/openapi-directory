package shared

import (
	"time"
)

type ApplicationState struct {
	ApplicationID     *string                `json:"ApplicationId,omitempty"`
	ApplicationStatus *ApplicationStatusEnum `json:"ApplicationStatus,omitempty"`
	LastUpdatedTime   *time.Time             `json:"LastUpdatedTime,omitempty"`
}
