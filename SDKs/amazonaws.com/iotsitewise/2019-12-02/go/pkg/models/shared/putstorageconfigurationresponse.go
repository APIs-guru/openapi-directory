package shared



type PutStorageConfigurationResponse struct {
    ConfigurationStatus ConfigurationStatus `json:"configurationStatus"`
    MultiLayerStorage *MultiLayerStorage `json:"multiLayerStorage,omitempty"`
    StorageType StorageTypeEnum `json:"storageType"`
    
}

