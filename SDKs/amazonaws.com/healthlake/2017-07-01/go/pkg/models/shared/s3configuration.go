package shared

// S3Configuration
//
//	The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access.
type S3Configuration struct {
	KmsKeyID string `json:"KmsKeyId"`
	S3URI    string `json:"S3Uri"`
}
