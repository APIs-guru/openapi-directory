package shared

type DescribeConnectionsResponse struct {
	Connections []Connection `json:"Connections"`
	Marker      *string      `json:"Marker"`
}
