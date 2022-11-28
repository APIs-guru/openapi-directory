package shared

// ElasticsearchDataSourceConfig
// Describes an Elasticsearch data source configuration.
type ElasticsearchDataSourceConfig struct {
	AwsRegion string `json:"awsRegion"`
	Endpoint  string `json:"endpoint"`
}
