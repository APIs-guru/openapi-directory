package shared

import (
"time")

type DescribeStorageConfigurationResponse struct {
    ConfigurationStatus ConfigurationStatus `json:"configurationStatus"`
    LastUpdateDate *time.Time `json:"lastUpdateDate,omitempty"`
    MultiLayerStorage *MultiLayerStorage `json:"multiLayerStorage,omitempty"`
    StorageType StorageTypeEnum `json:"storageType"`
    
}

