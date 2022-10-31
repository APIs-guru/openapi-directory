package shared

type DatastoreStorageSummary struct {
	CustomerManagedS3            *CustomerManagedDatastoreS3StorageSummary     `json:"customerManagedS3,omitempty"`
	IotSiteWiseMultiLayerStorage *DatastoreIotSiteWiseMultiLayerStorageSummary `json:"iotSiteWiseMultiLayerStorage,omitempty"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3,omitempty"`
}
