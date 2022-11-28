package shared

// ListGitHubAccountTokenNamesOutput
// Represents the output of a <code>ListGitHubAccountTokenNames</code> operation.
type ListGitHubAccountTokenNamesOutput struct {
	NextToken     *string  `json:"nextToken,omitempty"`
	TokenNameList []string `json:"tokenNameList,omitempty"`
}
