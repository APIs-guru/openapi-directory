package shared

type TableAutoScalingDescription struct {
	Replicas    []ReplicaAutoScalingDescription `json:"Replicas"`
	TableName   *string                         `json:"TableName"`
	TableStatus *TableStatusEnum                `json:"TableStatus"`
}
