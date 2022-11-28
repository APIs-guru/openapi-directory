package shared

// NodegroupHealth
// An object representing the health status of the node group.
type NodegroupHealth struct {
	Issues []Issue `json:"issues,omitempty"`
}
