package shared

type RedshiftConnectorProfileProperties struct {
	BucketName   string  `json:"bucketName"`
	BucketPrefix *string `json:"bucketPrefix"`
	DatabaseURL  string  `json:"databaseUrl"`
	RoleArn      string  `json:"roleArn"`
}
