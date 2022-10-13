package shared

type BackfillError struct {
	Code       *BackfillErrorCodeEnum `json:"Code"`
	Partitions []PartitionValueList   `json:"Partitions"`
}
