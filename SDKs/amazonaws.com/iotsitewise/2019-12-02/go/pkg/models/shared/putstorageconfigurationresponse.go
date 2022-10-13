package shared

type PutStorageConfigurationResponse struct {
	ConfigurationStatus ConfigurationStatus `json:"configurationStatus"`
	MultiLayerStorage   *MultiLayerStorage  `json:"multiLayerStorage"`
	StorageType         StorageTypeEnum     `json:"storageType"`
}
