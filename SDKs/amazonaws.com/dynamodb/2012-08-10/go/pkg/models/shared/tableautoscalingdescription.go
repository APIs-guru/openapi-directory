package shared

// TableAutoScalingDescription
// Represents the auto scaling configuration for a global table.
type TableAutoScalingDescription struct {
	Replicas    []ReplicaAutoScalingDescription `json:"Replicas,omitempty"`
	TableName   *string                         `json:"TableName,omitempty"`
	TableStatus *TableStatusEnum                `json:"TableStatus,omitempty"`
}
