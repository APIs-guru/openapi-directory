package shared

import (
"time")

type GluePolicy struct {
    CreateTime *time.Time `json:"CreateTime,omitempty"`
    PolicyHash *string `json:"PolicyHash,omitempty"`
    PolicyInJSON *string `json:"PolicyInJson,omitempty"`
    UpdateTime *time.Time `json:"UpdateTime,omitempty"`
    
}

