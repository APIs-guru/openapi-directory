package shared

// S3Target
// Specifies a data store in Amazon Simple Storage Service (Amazon S3).
type S3Target struct {
	ConnectionName *string  `json:"ConnectionName,omitempty"`
	Exclusions     []string `json:"Exclusions,omitempty"`
	Path           *string  `json:"Path,omitempty"`
	SampleSize     *int64   `json:"SampleSize,omitempty"`
}
