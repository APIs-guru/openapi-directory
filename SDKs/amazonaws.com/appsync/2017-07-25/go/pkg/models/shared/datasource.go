package shared

type DataSource struct {
	DataSourceArn            *string                             `json:"dataSourceArn"`
	Description              *string                             `json:"description"`
	DynamodbConfig           *DynamodbDataSourceConfig           `json:"dynamodbConfig"`
	ElasticsearchConfig      *ElasticsearchDataSourceConfig      `json:"elasticsearchConfig"`
	HTTPConfig               *HTTPDataSourceConfig               `json:"httpConfig"`
	LambdaConfig             *LambdaDataSourceConfig             `json:"lambdaConfig"`
	Name                     *string                             `json:"name"`
	RelationalDatabaseConfig *RelationalDatabaseDataSourceConfig `json:"relationalDatabaseConfig"`
	ServiceRoleArn           *string                             `json:"serviceRoleArn"`
	Type                     *DataSourceTypeEnum                 `json:"type"`
}
