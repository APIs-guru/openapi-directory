package shared



type ListStoredQueriesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    StoredQueryMetadata []StoredQueryMetadata `json:"StoredQueryMetadata,omitempty"`
    
}

