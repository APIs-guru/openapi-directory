package shared

type ListDataSourcesResponse struct {
	DataSources []DataSource `json:"dataSources"`
	NextToken   *string      `json:"nextToken"`
}
