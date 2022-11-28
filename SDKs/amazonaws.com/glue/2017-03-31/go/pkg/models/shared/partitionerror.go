package shared

// PartitionError
// Contains information about a partition error.
type PartitionError struct {
	ErrorDetail     *ErrorDetail `json:"ErrorDetail,omitempty"`
	PartitionValues []string     `json:"PartitionValues,omitempty"`
}
