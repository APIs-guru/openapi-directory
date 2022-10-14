package shared

import (
	"time"
)

type APIModelsLog struct {
	ID        *string    `json:"ID,omitempty"`
	Message   *string    `json:"Message,omitempty"`
	TimeStamp *time.Time `json:"TimeStamp,omitempty"`
}
