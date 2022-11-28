package shared

// ListBackendEnvironmentsResult
//
//	The result structure for the list backend environments result.
type ListBackendEnvironmentsResult struct {
	BackendEnvironments []BackendEnvironment `json:"backendEnvironments"`
	NextToken           *string              `json:"nextToken,omitempty"`
}
