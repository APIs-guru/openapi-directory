package shared

type ListEndpointsResponse struct {
	EndpointPropertiesList []EndpointProperties `json:"EndpointPropertiesList"`
	NextToken              *string              `json:"NextToken"`
}
