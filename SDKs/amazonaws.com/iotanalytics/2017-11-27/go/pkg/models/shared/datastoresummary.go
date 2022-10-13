package shared

import (
	"time"
)

type DatastoreSummary struct {
	CreationTime           *time.Time               `json:"creationTime"`
	DatastoreName          *string                  `json:"datastoreName"`
	DatastorePartitions    *DatastorePartitions     `json:"datastorePartitions"`
	DatastoreStorage       *DatastoreStorageSummary `json:"datastoreStorage"`
	FileFormatType         *FileFormatTypeEnum      `json:"fileFormatType"`
	LastMessageArrivalTime *time.Time               `json:"lastMessageArrivalTime"`
	LastUpdateTime         *time.Time               `json:"lastUpdateTime"`
	Status                 *DatastoreStatusEnum     `json:"status"`
}
