package shared

// DatastoreStorage
// Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
type DatastoreStorage struct {
	CustomerManagedS3            *CustomerManagedDatastoreS3Storage     `json:"customerManagedS3,omitempty"`
	IotSiteWiseMultiLayerStorage *DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
	ServiceManagedS3             map[string]interface{}                 `json:"serviceManagedS3,omitempty"`
}
