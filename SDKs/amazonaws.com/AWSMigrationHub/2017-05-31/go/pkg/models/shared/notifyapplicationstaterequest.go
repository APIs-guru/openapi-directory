package shared

import (
	"time"
)

type NotifyApplicationStateRequest struct {
	ApplicationID  string                `json:"ApplicationId"`
	DryRun         *bool                 `json:"DryRun"`
	Status         ApplicationStatusEnum `json:"Status"`
	UpdateDateTime *time.Time            `json:"UpdateDateTime"`
}
