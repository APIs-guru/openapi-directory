package shared

// BatchUpdatePartitionFailureEntry
// Contains information about a batch update partition error.
type BatchUpdatePartitionFailureEntry struct {
	ErrorDetail        *ErrorDetail `json:"ErrorDetail,omitempty"`
	PartitionValueList []string     `json:"PartitionValueList,omitempty"`
}
