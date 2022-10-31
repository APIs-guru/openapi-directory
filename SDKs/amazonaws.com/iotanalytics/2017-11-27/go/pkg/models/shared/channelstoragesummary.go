package shared

type ChannelStorageSummary struct {
	CustomerManagedS3 *CustomerManagedChannelS3StorageSummary `json:"customerManagedS3,omitempty"`
	ServiceManagedS3  map[string]interface{}                  `json:"serviceManagedS3,omitempty"`
}
