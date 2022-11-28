package shared

// ListAnalyzedResourcesResponse
// The response to the request.
type ListAnalyzedResourcesResponse struct {
	AnalyzedResources []AnalyzedResourceSummary `json:"analyzedResources"`
	NextToken         *string                   `json:"nextToken,omitempty"`
}
