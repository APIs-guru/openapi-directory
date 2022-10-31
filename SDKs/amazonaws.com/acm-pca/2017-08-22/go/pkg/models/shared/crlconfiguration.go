package shared



type CrlConfiguration struct {
    CustomCname *string `json:"CustomCname,omitempty"`
    Enabled bool `json:"Enabled"`
    ExpirationInDays *int64 `json:"ExpirationInDays,omitempty"`
    S3BucketName *string `json:"S3BucketName,omitempty"`
    S3ObjectACL *S3ObjectACLEnum `json:"S3ObjectAcl,omitempty"`
    
}

