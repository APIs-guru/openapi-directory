package shared

type BatchUpdatePartitionFailureEntry struct {
	ErrorDetail        *ErrorDetail `json:"ErrorDetail"`
	PartitionValueList []string     `json:"PartitionValueList"`
}
