package shared

type GetDevEndpointsResponse struct {
	DevEndpoints []DevEndpoint `json:"DevEndpoints"`
	NextToken    *string       `json:"NextToken"`
}
