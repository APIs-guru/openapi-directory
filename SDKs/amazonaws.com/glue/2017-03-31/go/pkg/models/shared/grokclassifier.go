package shared

import (
"time")

type GrokClassifier struct {
    Classification string `json:"Classification"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    CustomPatterns *string `json:"CustomPatterns,omitempty"`
    GrokPattern string `json:"GrokPattern"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    Name string `json:"Name"`
    Version *int64 `json:"Version,omitempty"`
    
}

