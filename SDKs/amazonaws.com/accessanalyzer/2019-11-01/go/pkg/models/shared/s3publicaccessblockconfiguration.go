package shared

type S3PublicAccessBlockConfiguration struct {
	IgnorePublicAcls      bool `json:"ignorePublicAcls"`
	RestrictPublicBuckets bool `json:"restrictPublicBuckets"`
}
