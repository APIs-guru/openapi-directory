package shared

type ListCustomRoutingPortMappingsByDestinationRequest struct {
	DestinationAddress string  `json:"DestinationAddress"`
	EndpointID         string  `json:"EndpointId"`
	MaxResults         *int64  `json:"MaxResults,omitempty"`
	NextToken          *string `json:"NextToken,omitempty"`
}
