package shared

// S3Location
// Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
type S3Location struct {
	Bucket string `json:"bucket"`
	Prefix string `json:"prefix"`
}
