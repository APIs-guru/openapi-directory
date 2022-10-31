package shared



type BatchGetPartitionResponse struct {
    Partitions []Partition `json:"Partitions,omitempty"`
    UnprocessedKeys []PartitionValueList `json:"UnprocessedKeys,omitempty"`
    
}

