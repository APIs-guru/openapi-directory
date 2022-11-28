package shared

// MultiLayerStorage
// Contains information about the storage destination.
type MultiLayerStorage struct {
	CustomerManagedS3Storage CustomerManagedS3Storage `json:"customerManagedS3Storage"`
}
