package shared

import (
"time")

type JSONClassifier struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    JSONPath string `json:"JsonPath"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    Name string `json:"Name"`
    Version *int64 `json:"Version,omitempty"`
    
}

