package shared



type ListDatastoresResponse struct {
    DatastoreSummaries []DatastoreSummary `json:"datastoreSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

