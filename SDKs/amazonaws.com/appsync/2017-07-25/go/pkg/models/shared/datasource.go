package shared

type DataSource struct {
	DataSourceArn            *string                             `json:"dataSourceArn,omitempty"`
	Description              *string                             `json:"description,omitempty"`
	DynamodbConfig           *DynamodbDataSourceConfig           `json:"dynamodbConfig,omitempty"`
	ElasticsearchConfig      *ElasticsearchDataSourceConfig      `json:"elasticsearchConfig,omitempty"`
	HTTPConfig               *HTTPDataSourceConfig               `json:"httpConfig,omitempty"`
	LambdaConfig             *LambdaDataSourceConfig             `json:"lambdaConfig,omitempty"`
	Name                     *string                             `json:"name,omitempty"`
	RelationalDatabaseConfig *RelationalDatabaseDataSourceConfig `json:"relationalDatabaseConfig,omitempty"`
	ServiceRoleArn           *string                             `json:"serviceRoleArn,omitempty"`
	Type                     *DataSourceTypeEnum                 `json:"type,omitempty"`
}
