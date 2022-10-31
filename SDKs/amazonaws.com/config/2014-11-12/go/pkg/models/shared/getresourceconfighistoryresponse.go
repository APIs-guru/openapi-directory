package shared



type GetResourceConfigHistoryResponse struct {
    ConfigurationItems []ConfigurationItem `json:"configurationItems,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

