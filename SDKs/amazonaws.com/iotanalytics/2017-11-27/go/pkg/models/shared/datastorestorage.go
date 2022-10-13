package shared

type DatastoreStorage struct {
	CustomerManagedS3            *CustomerManagedDatastoreS3Storage     `json:"customerManagedS3"`
	IotSiteWiseMultiLayerStorage *DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage"`
	ServiceManagedS3             map[string]interface{}                 `json:"serviceManagedS3"`
}
