package shared

type ListBackendJobsResponse struct {
	Jobs      []BackendJobRespObj `json:"Jobs"`
	NextToken *string             `json:"NextToken"`
}
