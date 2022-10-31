package shared

type DatastoreIotSiteWiseMultiLayerStorage struct {
	CustomerManagedS3Storage IotSiteWiseCustomerManagedDatastoreS3Storage `json:"customerManagedS3Storage"`
}
