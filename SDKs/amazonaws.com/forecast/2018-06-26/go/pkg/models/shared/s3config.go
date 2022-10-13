package shared

type S3Config struct {
	KmsKeyArn *string `json:"KMSKeyArn"`
	Path      string  `json:"Path"`
	RoleArn   string  `json:"RoleArn"`
}
