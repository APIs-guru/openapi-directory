package shared

// ReplicationConfiguration
// The replication configuration for a registry.
type ReplicationConfiguration struct {
	Rules []ReplicationRule `json:"rules"`
}
