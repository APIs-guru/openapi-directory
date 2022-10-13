package shared

type ChannelStorage struct {
	CustomerManagedS3 *CustomerManagedChannelS3Storage `json:"customerManagedS3"`
	ServiceManagedS3  map[string]interface{}           `json:"serviceManagedS3"`
}
