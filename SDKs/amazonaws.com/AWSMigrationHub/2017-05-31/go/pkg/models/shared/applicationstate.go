package shared

import (
	"time"
)

type ApplicationState struct {
	ApplicationID     *string                `json:"ApplicationId"`
	ApplicationStatus *ApplicationStatusEnum `json:"ApplicationStatus"`
	LastUpdatedTime   *time.Time             `json:"LastUpdatedTime"`
}
