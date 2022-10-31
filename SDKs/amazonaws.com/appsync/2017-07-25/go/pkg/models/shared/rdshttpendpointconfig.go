package shared



type RdsHTTPEndpointConfig struct {
    AwsRegion *string `json:"awsRegion,omitempty"`
    AwsSecretStoreArn *string `json:"awsSecretStoreArn,omitempty"`
    DatabaseName *string `json:"databaseName,omitempty"`
    DbClusterIdentifier *string `json:"dbClusterIdentifier,omitempty"`
    Schema *string `json:"schema,omitempty"`
    
}

