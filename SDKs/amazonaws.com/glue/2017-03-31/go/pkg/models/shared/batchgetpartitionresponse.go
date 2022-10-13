package shared

type BatchGetPartitionResponse struct {
	Partitions      []Partition          `json:"Partitions"`
	UnprocessedKeys []PartitionValueList `json:"UnprocessedKeys"`
}
