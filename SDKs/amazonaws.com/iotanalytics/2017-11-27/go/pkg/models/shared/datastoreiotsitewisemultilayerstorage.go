package shared

// DatastoreIotSiteWiseMultiLayerStorage
//
//	Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
type DatastoreIotSiteWiseMultiLayerStorage struct {
	CustomerManagedS3Storage IotSiteWiseCustomerManagedDatastoreS3Storage `json:"customerManagedS3Storage"`
}
