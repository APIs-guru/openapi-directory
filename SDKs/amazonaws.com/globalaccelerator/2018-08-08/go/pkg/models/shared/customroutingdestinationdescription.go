package shared

type CustomRoutingDestinationDescription struct {
	FromPort  *int64         `json:"FromPort,omitempty"`
	Protocols []ProtocolEnum `json:"Protocols,omitempty"`
	ToPort    *int64         `json:"ToPort,omitempty"`
}
