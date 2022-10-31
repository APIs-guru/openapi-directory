package shared

type ListManagedEndpointsResponse struct {
	Endpoints []Endpoint `json:"endpoints,omitempty"`
	NextToken *string    `json:"nextToken,omitempty"`
}
