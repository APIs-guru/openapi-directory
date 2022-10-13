package shared

type ChannelStorageSummary struct {
	CustomerManagedS3 *CustomerManagedChannelS3StorageSummary `json:"customerManagedS3"`
	ServiceManagedS3  map[string]interface{}                  `json:"serviceManagedS3"`
}
