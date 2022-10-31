package shared

import (
"time")

type DetectorModelSummary struct {
    CreationTime *time.Time `json:"creationTime,omitempty"`
    DetectorModelDescription *string `json:"detectorModelDescription,omitempty"`
    DetectorModelName *string `json:"detectorModelName,omitempty"`
    
}

