package shared

import (
"time")

type AccessPolicySummary struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    ID string `json:"id"`
    Identity Identity `json:"identity"`
    LastUpdateDate *time.Time `json:"lastUpdateDate,omitempty"`
    Permission PermissionEnum `json:"permission"`
    Resource Resource `json:"resource"`
    
}

