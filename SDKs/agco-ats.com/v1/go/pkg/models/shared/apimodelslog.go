package shared

import (
	"time"
)

type APIModelsLog struct {
	ID        *string    `json:"ID"`
	Message   *string    `json:"Message"`
	TimeStamp *time.Time `json:"TimeStamp"`
}
