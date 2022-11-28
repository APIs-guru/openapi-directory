package shared

// AttributeValue
// Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.
type AttributeValue struct {
	N   *float64           `json:"N,omitempty"`
	S   *string            `json:"S,omitempty"`
	Sdm map[string]float64 `json:"SDM,omitempty"`
	Sl  []string           `json:"SL,omitempty"`
}
