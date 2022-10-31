package shared

type PartitionError struct {
	ErrorDetail     *ErrorDetail `json:"ErrorDetail,omitempty"`
	PartitionValues []string     `json:"PartitionValues,omitempty"`
}
