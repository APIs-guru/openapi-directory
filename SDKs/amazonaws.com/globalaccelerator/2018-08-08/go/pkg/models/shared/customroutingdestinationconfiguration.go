package shared

// CustomRoutingDestinationConfiguration
// For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
type CustomRoutingDestinationConfiguration struct {
	FromPort  int64                       `json:"FromPort"`
	Protocols []CustomRoutingProtocolEnum `json:"Protocols"`
	ToPort    int64                       `json:"ToPort"`
}
