package shared

type DescribeRegistryResponse struct {
	RegistryID               *string                   `json:"registryId,omitempty"`
	ReplicationConfiguration *ReplicationConfiguration `json:"replicationConfiguration,omitempty"`
}
