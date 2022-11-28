package shared

// GetResourceConfigHistoryResponse
// The output for the <a>GetResourceConfigHistory</a> action.
type GetResourceConfigHistoryResponse struct {
	ConfigurationItems []ConfigurationItem `json:"configurationItems,omitempty"`
	NextToken          *string             `json:"nextToken,omitempty"`
}
