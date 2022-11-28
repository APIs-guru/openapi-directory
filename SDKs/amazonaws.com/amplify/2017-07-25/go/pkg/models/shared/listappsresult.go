package shared

// ListAppsResult
//
//	The result structure for an Amplify app list request.
type ListAppsResult struct {
	Apps      []App   `json:"apps"`
	NextToken *string `json:"nextToken,omitempty"`
}
