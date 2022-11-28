package shared

// RedshiftConnectorProfileProperties
//
//	The connector-specific profile properties when using Amazon Redshift.
type RedshiftConnectorProfileProperties struct {
	BucketName   string  `json:"bucketName"`
	BucketPrefix *string `json:"bucketPrefix,omitempty"`
	DatabaseURL  string  `json:"databaseUrl"`
	RoleArn      string  `json:"roleArn"`
}
