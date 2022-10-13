package shared

type DatastoreStorageSummary struct {
	CustomerManagedS3            *CustomerManagedDatastoreS3StorageSummary     `json:"customerManagedS3"`
	IotSiteWiseMultiLayerStorage *DatastoreIotSiteWiseMultiLayerStorageSummary `json:"iotSiteWiseMultiLayerStorage"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3"`
}
