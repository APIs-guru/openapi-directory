package shared

import (
"time")

type FileSystemSize struct {
    Timestamp *time.Time `json:"Timestamp,omitempty"`
    Value int64 `json:"Value"`
    ValueInIa *int64 `json:"ValueInIA,omitempty"`
    ValueInStandard *int64 `json:"ValueInStandard,omitempty"`
    
}

