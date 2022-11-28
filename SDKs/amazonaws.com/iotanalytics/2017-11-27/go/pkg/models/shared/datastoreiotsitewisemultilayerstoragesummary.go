package shared

// DatastoreIotSiteWiseMultiLayerStorageSummary
//
//	Contains information about the data store that you manage, which stores data used by IoT SiteWise.
type DatastoreIotSiteWiseMultiLayerStorageSummary struct {
	CustomerManagedS3Storage *IotSiteWiseCustomerManagedDatastoreS3StorageSummary `json:"customerManagedS3Storage,omitempty"`
}
