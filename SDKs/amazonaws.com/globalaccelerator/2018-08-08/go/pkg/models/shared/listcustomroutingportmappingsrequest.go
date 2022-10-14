package shared

type ListCustomRoutingPortMappingsRequest struct {
	AcceleratorArn   string  `json:"AcceleratorArn"`
	EndpointGroupArn *string `json:"EndpointGroupArn,omitempty"`
	MaxResults       *int64  `json:"MaxResults,omitempty"`
	NextToken        *string `json:"NextToken,omitempty"`
}
