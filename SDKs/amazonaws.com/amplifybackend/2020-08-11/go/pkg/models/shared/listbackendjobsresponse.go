package shared

type ListBackendJobsResponse struct {
	Jobs      []BackendJobRespObj `json:"Jobs,omitempty"`
	NextToken *string             `json:"NextToken,omitempty"`
}
