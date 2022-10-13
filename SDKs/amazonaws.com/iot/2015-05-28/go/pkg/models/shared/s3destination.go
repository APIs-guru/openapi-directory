package shared

type S3Destination struct {
	Bucket *string `json:"bucket"`
	Prefix *string `json:"prefix"`
}
