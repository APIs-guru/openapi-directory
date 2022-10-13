package shared

type PartitionError struct {
	ErrorDetail     *ErrorDetail `json:"ErrorDetail"`
	PartitionValues []string     `json:"PartitionValues"`
}
