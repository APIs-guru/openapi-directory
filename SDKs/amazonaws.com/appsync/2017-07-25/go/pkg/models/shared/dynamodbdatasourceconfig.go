package shared

type DynamodbDataSourceConfig struct {
	AwsRegion            string           `json:"awsRegion"`
	DeltaSyncConfig      *DeltaSyncConfig `json:"deltaSyncConfig,omitempty"`
	TableName            string           `json:"tableName"`
	UseCallerCredentials *bool            `json:"useCallerCredentials,omitempty"`
	Versioned            *bool            `json:"versioned,omitempty"`
}
