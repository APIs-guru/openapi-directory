package shared

// ReplicationRule
// An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
type ReplicationRule struct {
	Destinations []ReplicationDestination `json:"destinations"`
}
