package shared

type CrlConfiguration struct {
	CustomCname      *string          `json:"CustomCname"`
	Enabled          bool             `json:"Enabled"`
	ExpirationInDays *int64           `json:"ExpirationInDays"`
	S3BucketName     *string          `json:"S3BucketName"`
	S3ObjectACL      *S3ObjectACLEnum `json:"S3ObjectAcl"`
}
