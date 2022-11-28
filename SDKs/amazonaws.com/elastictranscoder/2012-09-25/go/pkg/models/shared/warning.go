package shared

// Warning
// <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
type Warning struct {
	Code    *string `json:"Code,omitempty"`
	Message *string `json:"Message,omitempty"`
}
