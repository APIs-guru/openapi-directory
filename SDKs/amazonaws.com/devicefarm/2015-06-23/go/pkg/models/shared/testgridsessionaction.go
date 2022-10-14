package shared

import (
	"time"
)

type TestGridSessionAction struct {
	Action        *string    `json:"action,omitempty"`
	Duration      *int64     `json:"duration,omitempty"`
	RequestMethod *string    `json:"requestMethod,omitempty"`
	Started       *time.Time `json:"started,omitempty"`
	StatusCode    *string    `json:"statusCode,omitempty"`
}
