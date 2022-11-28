package shared

// TimeToLiveSpecification
// Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
type TimeToLiveSpecification struct {
	AttributeName string `json:"AttributeName"`
	Enabled       bool   `json:"Enabled"`
}
