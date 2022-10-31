package shared

import (
"time")

type EstimatedResourceSize struct {
    EstimatedOn *time.Time `json:"estimatedOn,omitempty"`
    EstimatedSizeInBytes *float64 `json:"estimatedSizeInBytes,omitempty"`
    
}

