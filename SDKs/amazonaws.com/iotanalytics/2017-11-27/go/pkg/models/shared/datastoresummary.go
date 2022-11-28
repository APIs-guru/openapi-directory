package shared

import (
	"time"
)

// DatastoreSummary
// A summary of information about a data store.
type DatastoreSummary struct {
	CreationTime           *time.Time               `json:"creationTime,omitempty"`
	DatastoreName          *string                  `json:"datastoreName,omitempty"`
	DatastorePartitions    *DatastorePartitions     `json:"datastorePartitions,omitempty"`
	DatastoreStorage       *DatastoreStorageSummary `json:"datastoreStorage,omitempty"`
	FileFormatType         *FileFormatTypeEnum      `json:"fileFormatType,omitempty"`
	LastMessageArrivalTime *time.Time               `json:"lastMessageArrivalTime,omitempty"`
	LastUpdateTime         *time.Time               `json:"lastUpdateTime,omitempty"`
	Status                 *DatastoreStatusEnum     `json:"status,omitempty"`
}
