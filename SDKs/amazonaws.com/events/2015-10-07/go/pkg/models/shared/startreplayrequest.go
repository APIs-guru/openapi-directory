package shared

import (
	"time"
)

type StartReplayRequest struct {
	Description    *string           `json:"Description"`
	Destination    ReplayDestination `json:"Destination"`
	EventEndTime   time.Time         `json:"EventEndTime"`
	EventSourceArn string            `json:"EventSourceArn"`
	EventStartTime time.Time         `json:"EventStartTime"`
	ReplayName     string            `json:"ReplayName"`
}
