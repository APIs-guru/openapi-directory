package shared

type S3Destination struct {
	Bucket      *string `json:"bucket"`
	Key         *string `json:"key"`
	MetadataKey *string `json:"metadataKey"`
}
