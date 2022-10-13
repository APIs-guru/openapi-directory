package shared

type ListManagedEndpointsResponse struct {
	Endpoints []Endpoint `json:"endpoints"`
	NextToken *string    `json:"nextToken"`
}
