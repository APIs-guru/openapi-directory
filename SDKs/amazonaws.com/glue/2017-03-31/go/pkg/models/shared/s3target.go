package shared

type S3Target struct {
	ConnectionName *string  `json:"ConnectionName"`
	Exclusions     []string `json:"Exclusions"`
	Path           *string  `json:"Path"`
	SampleSize     *int64   `json:"SampleSize"`
}
