package shared

// BatchUpdatePartitionRequestEntry
// A structure that contains the values and structure used to update a partition.
type BatchUpdatePartitionRequestEntry struct {
	PartitionInput     PartitionInput `json:"PartitionInput"`
	PartitionValueList []string       `json:"PartitionValueList"`
}
