package shared

type ListEndpointsResponse struct {
	EndpointPropertiesList []EndpointProperties `json:"EndpointPropertiesList,omitempty"`
	NextToken              *string              `json:"NextToken,omitempty"`
}
