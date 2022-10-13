package shared

type BatchUpdatePartitionRequestEntry struct {
	PartitionInput     PartitionInput `json:"PartitionInput"`
	PartitionValueList []string       `json:"PartitionValueList"`
}
