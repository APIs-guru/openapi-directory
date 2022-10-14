package shared

type BackfillError struct {
	Code       *BackfillErrorCodeEnum `json:"Code,omitempty"`
	Partitions []PartitionValueList   `json:"Partitions,omitempty"`
}
