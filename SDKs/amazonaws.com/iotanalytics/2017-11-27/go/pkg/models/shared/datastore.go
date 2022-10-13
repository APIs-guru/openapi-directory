package shared

import (
	"time"
)

type Datastore struct {
	Arn                     *string                  `json:"arn"`
	CreationTime            *time.Time               `json:"creationTime"`
	DatastorePartitions     *DatastorePartitions     `json:"datastorePartitions"`
	FileFormatConfiguration *FileFormatConfiguration `json:"fileFormatConfiguration"`
	LastMessageArrivalTime  *time.Time               `json:"lastMessageArrivalTime"`
	LastUpdateTime          *time.Time               `json:"lastUpdateTime"`
	Name                    *string                  `json:"name"`
	RetentionPeriod         *RetentionPeriod         `json:"retentionPeriod"`
	Status                  *DatastoreStatusEnum     `json:"status"`
	Storage                 *DatastoreStorage        `json:"storage"`
}
