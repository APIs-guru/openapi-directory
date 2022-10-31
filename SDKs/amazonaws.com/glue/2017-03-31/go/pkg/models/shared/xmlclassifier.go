package shared

import (
"time")

type XMLClassifier struct {
    Classification string `json:"Classification"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    Name string `json:"Name"`
    RowTag *string `json:"RowTag,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

