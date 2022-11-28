package shared

// ReplicationDestination
// An array of objects representing the details of a replication destination.
type ReplicationDestination struct {
	Region     string `json:"region"`
	RegistryID string `json:"registryId"`
}
