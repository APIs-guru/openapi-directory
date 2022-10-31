package shared

import (
"time")

type Credentials struct {
    AccessKeyID *string `json:"AccessKeyId,omitempty"`
    Expiration *time.Time `json:"Expiration,omitempty"`
    SecretKey *string `json:"SecretKey,omitempty"`
    SessionToken *string `json:"SessionToken,omitempty"`
    
}

