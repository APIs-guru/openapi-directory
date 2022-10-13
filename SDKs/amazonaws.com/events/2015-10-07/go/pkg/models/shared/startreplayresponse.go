package shared

import (
	"time"
)

type StartReplayResponse struct {
	ReplayArn       *string          `json:"ReplayArn"`
	ReplayStartTime *time.Time       `json:"ReplayStartTime"`
	State           *ReplayStateEnum `json:"State"`
	StateReason     *string          `json:"StateReason"`
}
