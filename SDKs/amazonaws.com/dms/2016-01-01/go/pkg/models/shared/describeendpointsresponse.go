package shared

type DescribeEndpointsResponse struct {
	Endpoints []Endpoint `json:"Endpoints"`
	Marker    *string    `json:"Marker"`
}
