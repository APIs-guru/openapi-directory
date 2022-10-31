package shared

import (
	"time"
)

type UpdateSystemModelsClientStatus struct {
	ClientID            *string    `json:"ClientID,omitempty"`
	LastCheckin         *time.Time `json:"LastCheckin,omitempty"`
	MinutesElapsed      *int32     `json:"MinutesElapsed,omitempty"`
	ReportResult        *string    `json:"ReportResult,omitempty"`
	ReportResultIsValid *bool      `json:"ReportResultIsValid,omitempty"`
	ReportValue         *string    `json:"ReportValue,omitempty"`
	Tag                 *string    `json:"Tag,omitempty"`
}
