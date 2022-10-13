package shared

type DescribeRegistryResponse struct {
	RegistryID               *string                   `json:"registryId"`
	ReplicationConfiguration *ReplicationConfiguration `json:"replicationConfiguration"`
}
