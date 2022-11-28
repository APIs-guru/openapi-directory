package shared

// CustomRoutingEndpointConfiguration
// The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
type CustomRoutingEndpointConfiguration struct {
	EndpointID *string `json:"EndpointId,omitempty"`
}
