package shared

import (
	"time"
)

type UpdateSystemModelsClientStatus struct {
	ClientID            *string    `json:"ClientID"`
	LastCheckin         *time.Time `json:"LastCheckin"`
	MinutesElapsed      *int32     `json:"MinutesElapsed"`
	ReportResult        *string    `json:"ReportResult"`
	ReportResultIsValid *bool      `json:"ReportResultIsValid"`
	ReportValue         *string    `json:"ReportValue"`
	Tag                 *string    `json:"Tag"`
}
