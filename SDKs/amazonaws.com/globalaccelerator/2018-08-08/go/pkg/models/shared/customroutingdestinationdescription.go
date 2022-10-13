package shared

type CustomRoutingDestinationDescription struct {
	FromPort  *int64         `json:"FromPort"`
	Protocols []ProtocolEnum `json:"Protocols"`
	ToPort    *int64         `json:"ToPort"`
}
