package shared

// AllowedNodeTypeModificationsMessage
// Represents the allowed node types you can use to modify your cluster or replication group.
type AllowedNodeTypeModificationsMessage struct {
	ScaleDownModifications []string
	ScaleUpModifications   []string
}
