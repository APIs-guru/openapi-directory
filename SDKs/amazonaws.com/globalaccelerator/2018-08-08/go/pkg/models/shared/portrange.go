package shared

type PortRange struct {
	FromPort *int64 `json:"FromPort,omitempty"`
	ToPort   *int64 `json:"ToPort,omitempty"`
}
