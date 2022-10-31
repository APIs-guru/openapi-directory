package shared



type ListAnalyzedResourcesResponse struct {
    AnalyzedResources []AnalyzedResourceSummary `json:"analyzedResources"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

