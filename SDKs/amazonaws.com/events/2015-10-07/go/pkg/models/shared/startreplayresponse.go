package shared

import (
"time")

type StartReplayResponse struct {
    ReplayArn *string `json:"ReplayArn,omitempty"`
    ReplayStartTime *time.Time `json:"ReplayStartTime,omitempty"`
    State *ReplayStateEnum `json:"State,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    
}

