package shared

type BatchGetDevEndpointsResponse struct {
	DevEndpoints         []DevEndpoint `json:"DevEndpoints"`
	DevEndpointsNotFound []string      `json:"DevEndpointsNotFound"`
}
