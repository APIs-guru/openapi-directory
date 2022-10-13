package shared

import (
	"time"
)

type TestGridSessionAction struct {
	Action        *string    `json:"action"`
	Duration      *int64     `json:"duration"`
	RequestMethod *string    `json:"requestMethod"`
	Started       *time.Time `json:"started"`
	StatusCode    *string    `json:"statusCode"`
}
