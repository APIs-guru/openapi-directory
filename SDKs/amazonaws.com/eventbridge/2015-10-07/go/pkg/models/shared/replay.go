package shared

import (
	"time"
)

type Replay struct {
	EventEndTime          *time.Time       `json:"EventEndTime"`
	EventLastReplayedTime *time.Time       `json:"EventLastReplayedTime"`
	EventSourceArn        *string          `json:"EventSourceArn"`
	EventStartTime        *time.Time       `json:"EventStartTime"`
	ReplayEndTime         *time.Time       `json:"ReplayEndTime"`
	ReplayName            *string          `json:"ReplayName"`
	ReplayStartTime       *time.Time       `json:"ReplayStartTime"`
	State                 *ReplayStateEnum `json:"State"`
	StateReason           *string          `json:"StateReason"`
}
