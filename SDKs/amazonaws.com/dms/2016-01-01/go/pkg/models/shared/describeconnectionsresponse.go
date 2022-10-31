package shared



type DescribeConnectionsResponse struct {
    Connections []Connection `json:"Connections,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

