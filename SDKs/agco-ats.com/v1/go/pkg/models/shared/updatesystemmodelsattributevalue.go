package shared

import (
	"time"
)

type UpdateSystemModelsAttributeValue struct {
	Key       string     `json:"Key"`
	TimeStamp *time.Time `json:"TimeStamp"`
	Value     *string    `json:"Value"`
}
