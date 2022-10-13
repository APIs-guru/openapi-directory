package shared

import (
	"time"
)

type DescribeStorageConfigurationResponse struct {
	ConfigurationStatus ConfigurationStatus `json:"configurationStatus"`
	LastUpdateDate      *time.Time          `json:"lastUpdateDate"`
	MultiLayerStorage   *MultiLayerStorage  `json:"multiLayerStorage"`
	StorageType         StorageTypeEnum     `json:"storageType"`
}
