package shared

import (
	"time"
)

type DatastoreFilter struct {
	CreatedAfter    *time.Time           `json:"CreatedAfter"`
	CreatedBefore   *time.Time           `json:"CreatedBefore"`
	DatastoreName   *string              `json:"DatastoreName"`
	DatastoreStatus *DatastoreStatusEnum `json:"DatastoreStatus"`
}
