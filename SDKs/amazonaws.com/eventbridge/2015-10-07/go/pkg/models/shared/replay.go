package shared

import (
	"time"
)

type Replay struct {
	EventEndTime          *time.Time       `json:"EventEndTime,omitempty"`
	EventLastReplayedTime *time.Time       `json:"EventLastReplayedTime,omitempty"`
	EventSourceArn        *string          `json:"EventSourceArn,omitempty"`
	EventStartTime        *time.Time       `json:"EventStartTime,omitempty"`
	ReplayEndTime         *time.Time       `json:"ReplayEndTime,omitempty"`
	ReplayName            *string          `json:"ReplayName,omitempty"`
	ReplayStartTime       *time.Time       `json:"ReplayStartTime,omitempty"`
	State                 *ReplayStateEnum `json:"State,omitempty"`
	StateReason           *string          `json:"StateReason,omitempty"`
}
