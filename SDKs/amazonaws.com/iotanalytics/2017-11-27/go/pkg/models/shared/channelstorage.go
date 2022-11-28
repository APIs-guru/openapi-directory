package shared

// ChannelStorage
// Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
type ChannelStorage struct {
	CustomerManagedS3 *CustomerManagedChannelS3Storage `json:"customerManagedS3,omitempty"`
	ServiceManagedS3  map[string]interface{}           `json:"serviceManagedS3,omitempty"`
}
