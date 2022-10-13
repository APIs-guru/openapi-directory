package shared

type ListDevEndpointsResponse struct {
	DevEndpointNames []string `json:"DevEndpointNames"`
	NextToken        *string  `json:"NextToken"`
}
