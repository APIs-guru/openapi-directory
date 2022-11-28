package shared

// IotSiteWiseCustomerManagedDatastoreS3Storage
//
//	Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
type IotSiteWiseCustomerManagedDatastoreS3Storage struct {
	Bucket    string  `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix,omitempty"`
}
