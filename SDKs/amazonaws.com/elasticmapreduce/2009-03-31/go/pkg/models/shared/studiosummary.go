package shared

import (
"time")

type StudioSummary struct {
    AuthMode *AuthModeEnum `json:"AuthMode,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    StudioID *string `json:"StudioId,omitempty"`
    URL *string `json:"Url,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

