package shared

type RdsHTTPEndpointConfig struct {
	AwsRegion           *string `json:"awsRegion"`
	AwsSecretStoreArn   *string `json:"awsSecretStoreArn"`
	DatabaseName        *string `json:"databaseName"`
	DbClusterIdentifier *string `json:"dbClusterIdentifier"`
	Schema              *string `json:"schema"`
}
