package shared

// BatchParameters
// The custom parameters to be used when the target is an Batch job.
type BatchParameters struct {
	ArrayProperties *BatchArrayProperties `json:"ArrayProperties,omitempty"`
	JobDefinition   string                `json:"JobDefinition"`
	JobName         string                `json:"JobName"`
	RetryStrategy   *BatchRetryStrategy   `json:"RetryStrategy,omitempty"`
}
