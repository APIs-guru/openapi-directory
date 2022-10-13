package shared

type ListBackendEnvironmentsResult struct {
	BackendEnvironments []BackendEnvironment `json:"backendEnvironments"`
	NextToken           *string              `json:"nextToken"`
}
