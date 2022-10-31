package shared

import (
"time")

type DatastoreFilter struct {
    CreatedAfter *time.Time `json:"CreatedAfter,omitempty"`
    CreatedBefore *time.Time `json:"CreatedBefore,omitempty"`
    DatastoreName *string `json:"DatastoreName,omitempty"`
    DatastoreStatus *DatastoreStatusEnum `json:"DatastoreStatus,omitempty"`
    
}

