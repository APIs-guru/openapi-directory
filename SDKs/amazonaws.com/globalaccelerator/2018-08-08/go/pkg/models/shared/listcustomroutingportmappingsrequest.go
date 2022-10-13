package shared

type ListCustomRoutingPortMappingsRequest struct {
	AcceleratorArn   string  `json:"AcceleratorArn"`
	EndpointGroupArn *string `json:"EndpointGroupArn"`
	MaxResults       *int64  `json:"MaxResults"`
	NextToken        *string `json:"NextToken"`
}
