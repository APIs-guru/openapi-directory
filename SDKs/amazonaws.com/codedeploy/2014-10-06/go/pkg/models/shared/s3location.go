package shared

type S3Location struct {
	Bucket     *string         `json:"bucket"`
	BundleType *BundleTypeEnum `json:"bundleType"`
	ETag       *string         `json:"eTag"`
	Key        *string         `json:"key"`
	Version    *string         `json:"version"`
}
