package shared

type CustomRoutingDestinationConfiguration struct {
	FromPort  int64                       `json:"FromPort"`
	Protocols []CustomRoutingProtocolEnum `json:"Protocols"`
	ToPort    int64                       `json:"ToPort"`
}
