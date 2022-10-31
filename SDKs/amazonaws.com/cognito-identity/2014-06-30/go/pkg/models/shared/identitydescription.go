package shared

import (
"time")

type IdentityDescription struct {
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    IdentityID *string `json:"IdentityId,omitempty"`
    LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
    Logins []string `json:"Logins,omitempty"`
    
}

