package shared

import (
	"time"
)

// DatastoreFilter
// The filters applied to Data Store query.
type DatastoreFilter struct {
	CreatedAfter    *time.Time           `json:"CreatedAfter,omitempty"`
	CreatedBefore   *time.Time           `json:"CreatedBefore,omitempty"`
	DatastoreName   *string              `json:"DatastoreName,omitempty"`
	DatastoreStatus *DatastoreStatusEnum `json:"DatastoreStatus,omitempty"`
}
