package shared

// IotSiteWiseCustomerManagedDatastoreS3StorageSummary
//
//	Contains information about the data store that you manage, which stores data used by IoT SiteWise.
type IotSiteWiseCustomerManagedDatastoreS3StorageSummary struct {
	Bucket    *string `json:"bucket,omitempty"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
}
