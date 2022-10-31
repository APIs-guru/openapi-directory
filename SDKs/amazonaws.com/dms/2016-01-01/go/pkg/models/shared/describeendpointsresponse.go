package shared

type DescribeEndpointsResponse struct {
	Endpoints []Endpoint `json:"Endpoints,omitempty"`
	Marker    *string    `json:"Marker,omitempty"`
}
