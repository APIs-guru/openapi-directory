package shared

type BatchUpdatePartitionResponse struct {
	Errors []BatchUpdatePartitionFailureEntry `json:"Errors"`
}
