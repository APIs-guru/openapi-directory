package shared

import (
"time")

type WorkGroupSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    EngineVersion *EngineVersion `json:"EngineVersion,omitempty"`
    Name *string `json:"Name,omitempty"`
    State *WorkGroupStateEnum `json:"State,omitempty"`
    
}

