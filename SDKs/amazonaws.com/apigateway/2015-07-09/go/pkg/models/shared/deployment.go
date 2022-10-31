package shared

import (
"time")

type Deployment struct {
    APISummary map[string]map[string]MethodSnapshot `json:"apiSummary,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

