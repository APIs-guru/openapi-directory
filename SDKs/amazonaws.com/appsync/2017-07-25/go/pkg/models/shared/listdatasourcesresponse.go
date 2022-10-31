package shared



type ListDataSourcesResponse struct {
    DataSources []DataSource `json:"dataSources,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

