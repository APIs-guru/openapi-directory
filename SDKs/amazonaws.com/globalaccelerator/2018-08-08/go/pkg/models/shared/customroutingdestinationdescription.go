package shared

// CustomRoutingDestinationDescription
// For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
type CustomRoutingDestinationDescription struct {
	FromPort  *int64         `json:"FromPort,omitempty"`
	Protocols []ProtocolEnum `json:"Protocols,omitempty"`
	ToPort    *int64         `json:"ToPort,omitempty"`
}
