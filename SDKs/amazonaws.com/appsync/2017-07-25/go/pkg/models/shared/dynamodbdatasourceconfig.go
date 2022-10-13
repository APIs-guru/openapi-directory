package shared

type DynamodbDataSourceConfig struct {
	AwsRegion            string           `json:"awsRegion"`
	DeltaSyncConfig      *DeltaSyncConfig `json:"deltaSyncConfig"`
	TableName            string           `json:"tableName"`
	UseCallerCredentials *bool            `json:"useCallerCredentials"`
	Versioned            *bool            `json:"versioned"`
}
