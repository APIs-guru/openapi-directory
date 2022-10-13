package shared

type S3DestinationConfig struct {
	Bucket    *string `json:"bucket"`
	KeyPrefix *string `json:"keyPrefix"`
}
