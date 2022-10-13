package shared

import (
	"time"
)

type DescribeReplayResponse struct {
	Description           *string            `json:"Description"`
	Destination           *ReplayDestination `json:"Destination"`
	EventEndTime          *time.Time         `json:"EventEndTime"`
	EventLastReplayedTime *time.Time         `json:"EventLastReplayedTime"`
	EventSourceArn        *string            `json:"EventSourceArn"`
	EventStartTime        *time.Time         `json:"EventStartTime"`
	ReplayArn             *string            `json:"ReplayArn"`
	ReplayEndTime         *time.Time         `json:"ReplayEndTime"`
	ReplayName            *string            `json:"ReplayName"`
	ReplayStartTime       *time.Time         `json:"ReplayStartTime"`
	State                 *ReplayStateEnum   `json:"State"`
	StateReason           *string            `json:"StateReason"`
}
