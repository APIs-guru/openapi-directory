package shared

import (
"time")

type PublicKey struct {
    Fingerprint *string `json:"Fingerprint,omitempty"`
    ValidityEndTime *time.Time `json:"ValidityEndTime,omitempty"`
    ValidityStartTime *time.Time `json:"ValidityStartTime,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

