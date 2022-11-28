package shared

// CustomRoutingEndpointDescription
// A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets.
type CustomRoutingEndpointDescription struct {
	EndpointID *string `json:"EndpointId,omitempty"`
}
