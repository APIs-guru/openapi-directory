package shared

type BatchParameters struct {
	ArrayProperties *BatchArrayProperties `json:"ArrayProperties"`
	JobDefinition   string                `json:"JobDefinition"`
	JobName         string                `json:"JobName"`
	RetryStrategy   *BatchRetryStrategy   `json:"RetryStrategy"`
}
