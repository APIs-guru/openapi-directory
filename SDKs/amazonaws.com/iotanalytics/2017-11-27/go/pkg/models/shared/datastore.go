package shared

import (
"time")

type Datastore struct {
    Arn *string `json:"arn,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    DatastorePartitions *DatastorePartitions `json:"datastorePartitions,omitempty"`
    FileFormatConfiguration *FileFormatConfiguration `json:"fileFormatConfiguration,omitempty"`
    LastMessageArrivalTime *time.Time `json:"lastMessageArrivalTime,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    RetentionPeriod *RetentionPeriod `json:"retentionPeriod,omitempty"`
    Status *DatastoreStatusEnum `json:"status,omitempty"`
    Storage *DatastoreStorage `json:"storage,omitempty"`
    
}

