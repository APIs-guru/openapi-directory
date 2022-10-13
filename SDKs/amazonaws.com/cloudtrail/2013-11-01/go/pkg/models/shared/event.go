package shared

import (
	"time"
)

type Event struct {
	AccessKeyID     *string    `json:"AccessKeyId"`
	CloudTrailEvent *string    `json:"CloudTrailEvent"`
	EventID         *string    `json:"EventId"`
	EventName       *string    `json:"EventName"`
	EventSource     *string    `json:"EventSource"`
	EventTime       *time.Time `json:"EventTime"`
	ReadOnly        *string    `json:"ReadOnly"`
	Resources       []Resource `json:"Resources"`
	Username        *string    `json:"Username"`
}
