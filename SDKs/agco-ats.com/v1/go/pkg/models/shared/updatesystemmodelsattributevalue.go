package shared

import (
	"time"
)

type UpdateSystemModelsAttributeValue struct {
	Key       string     `json:"Key"`
	TimeStamp *time.Time `json:"TimeStamp,omitempty"`
	Value     *string    `json:"Value,omitempty"`
}
