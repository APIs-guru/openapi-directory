package shared



type ListConfigurationsRequest struct {
    ConfigurationType ConfigurationItemTypeEnum `json:"configurationType"`
    Filters []Filter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    OrderBy []OrderByElement `json:"orderBy,omitempty"`
    
}

