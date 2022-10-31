package shared



type TableAutoScalingDescription struct {
    Replicas []ReplicaAutoScalingDescription `json:"Replicas,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    TableStatus *TableStatusEnum `json:"TableStatus,omitempty"`
    
}

