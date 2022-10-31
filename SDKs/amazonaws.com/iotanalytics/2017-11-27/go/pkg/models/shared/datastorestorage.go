package shared

type DatastoreStorage struct {
	CustomerManagedS3            *CustomerManagedDatastoreS3Storage     `json:"customerManagedS3,omitempty"`
	IotSiteWiseMultiLayerStorage *DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
	ServiceManagedS3             map[string]interface{}                 `json:"serviceManagedS3,omitempty"`
}
